import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  savePath: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export const Upload = mongoose.model('upload', UserSchema);