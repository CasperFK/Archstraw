import * as mongoose from 'mongoose';

export const SaleDay = new mongoose.Schema({
  calendarDay: {
    type: Date,
    default: Date.now,
    required: true,
    unique: true,
  },
  totalSales: {
    value: {
      type: Number,
      default: 0,
    },
    currency: {
      type: String,
      default: 'PLN',
    },
  },
  pricePerKilo: {
    value: {
      type: Number,
      default: 0,
    },
    currency: {
      type: String,
      default: 'PLN',
    },
  },
  netIncomeFromSales: {
    value: {
      type: Number,
      default: 0,
    },
    currency: {
      type: String,
      default: 'PLN',
    },
  },
  merchant: {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    }
  },
})