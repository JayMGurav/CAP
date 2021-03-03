
import { ApolloServer} from 'apollo-server-micro'
import mongoose from 'mongoose';

import models from '@/models/index'
import schema from '@/graphql/index'

let db;


const apolloServer = new ApolloServer({
  schema,
  context: async () => {
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
         */

      } catch (error) {
        throw new Error('MongoDB connection error 🥱 :', error.message)
      }
    }

    return {
      db,
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
