export default {
    users: async (_, __, { models }) =>
        await models.User.find({}).exec()
}