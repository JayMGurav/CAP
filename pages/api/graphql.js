import {Magic} from '@magic-sdk/admin';
import { ApolloServer} from 'apollo-server-micro'
import mongoose from 'mongoose';

import models from '@/models/index'
import schema from '@/graphql/index'

let db;
let magic = new Magic(process.env.MAGIC_SECRET_KEY);

const apolloServer = new ApolloServer({
  schema,
  context: async ({ req }) => {
    
    let user = null, authHeader = req.headers.authorization;
    
    if(authHeader){
      const didToken = magic.utils.parseAuthorizationHeader(req.headers.authorization);
       user = await new Magic(process.env.MAGIC_SECRET_KEY).users.getMetadataByToken(didToken);
    }


    if(!db){
      try {
        await mongoose.connect(process.env.MONGODB_URL, {
          useUnifiedTopology: true,
          useFindAndModify: false,
          useCreateIndex: true,
          useNewUrlParser: true
        });
        db = mongoose.connection;
        db.once('open', function() {
          console.log('DB connected 🚀')
        });

        /**
         *  Validate user
         * 
         *   let token = req.headers.authorization;
         *   let user = getUser(token);
         * 
         *    add user login context
         */

      } catch (error) {
        throw new Error('MongoDB connection error 🥱 :', error.message)
      }
    }

    return {
      user,
      models
    }
   }
})

export const config = {
  api: {
    bodyParser: false,
  },
}

export default apolloServer.createHandler({ path: '/api/graphql' })
