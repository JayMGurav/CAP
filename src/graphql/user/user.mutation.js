export default {
  addUser: async (_, {  fullname, email, summary}, { models }) => {
    try {
      if(!fullname) throw new AuthenticationError('fullname is required');
      return await models.User.create({
        fullname,
        email,
        summary,
      })
    } catch (error) {
      console.error('Error adding user to DB :', error.message);
    }    
  }
}