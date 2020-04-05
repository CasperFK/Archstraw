import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  password: String,
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
  },
}, {
    timestamps: true,
});
