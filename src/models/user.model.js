
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: [true,'Fullname is  required']
  },
  email: {
    type: String,
    required: [true,'Email is required'],
    unique: true
  },
  summary: {
    type: String,
    validate: {
      validator: function(v) {
        return v.length <= 140
      },
      message: (props) => {
        console.log({summaryProps:props});
        return `Summary should not be greate than 100 characters`
      }
    },
    // min: [140, 'Summary should be less than 100'],
  }
},{ timestamps: true });

const User = mongoose.models['user'] || mongoose.model('user', userSchema);
export default User;