import * as mongoose from 'mongoose';

export const WorkerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  surName: {
    type: String,
    default: ' ',
  },
  phone: {
    type: String,
    default: ' ',
  },
  totalCollectedBasketsOfStrawberries: {
    type: Number,
    default: 0,
  },
  fullSalary: {
    value: {
      type: Number,
      default: 0,
    },
    currency: {
      type: String,
      default: 'PLN',
    },
  },
});
