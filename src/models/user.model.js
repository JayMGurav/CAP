
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  fullname: {
    type: String
  }
},{ timestamps: true });

const User = mongoose.models['user'] || mongoose.model('user', userSchema);
export default User;