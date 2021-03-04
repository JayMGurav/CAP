export default {
    users: async (_, __, { models }) => { return await models.User.find({}).exec() },
    me: async (_, {id}, { models }) => { return await models.User.findById(id).exec() },
    isUser: async (_, {email}, { models }) => { 
        const user = await models.User.findOne({email}).exec();
        return  user ? true : false 
    }
}