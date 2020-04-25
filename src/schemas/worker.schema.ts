import * as mongoose from 'mongoose';

export const WorkerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    default: '',
  },
  phoneNumber: {
    type: String,
    default: '',
  },
});
