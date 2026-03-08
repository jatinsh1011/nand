import mongoose from 'mongoose';

export const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  password: {
    type: String,
  },
});

const User = mongoose.model('User', userSchema);
export default User;
