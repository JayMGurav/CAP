export default {
    users: async (_, __, { models, user }) => { 
        
        return await models.User.find({}).exec()
    },
    me: async (_, __, { models, user }) => { return await models.User.findOne({email: user.email}).exec() },
    isUser: async (_, {email}, { models, user:lu }) => { 
        console.log({lu});
        
        const user = await models.User.findOne({email}).exec();
        return  user ? true : false 
    }
}