export default {
  sayHello(parent, args, {models, user}) {
    console.log(user);
    
    return 'Hello World!'
  },
}