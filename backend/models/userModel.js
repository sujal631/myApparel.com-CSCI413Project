/* Discription: userModel.js file is a java script file that is going to hold the mongoose
schema for our users. It defines the cols for the user table.

Date: 2-19-22
*/

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false, required: true },
    isSeller: { type: Boolean, default: false, required: true },
  },
  {
    //created and update records will have time stamps
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);
export default User;
