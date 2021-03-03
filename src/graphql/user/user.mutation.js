export default {
  addUser: async (_, { fullname }, { models }) => {
    try {
      if(!fullname) throw new AuthenticationError('fullname is required');
      return await models.User.create({
        fullname
      })
    } catch (error) {
      console.error('Error adding user to DB :', error.message);
    }    
  }
}