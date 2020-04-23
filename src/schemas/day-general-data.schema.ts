import * as mongoose from 'mongoose';

export const DayGeneralData = new mongoose.Schema({
  calendarDay: {
    type: Date,
    default: Date.now,
    required: true,
    unique: true,
  },
  priceForTheCollectedBasket: {
    value: {
      type: Number,
      default: 0,
    },
    currency: {
      type: String,
      default: 'PLN',
    },
  },
  totalCollectedBasketsOfStrawberries: {
    type: Number,
    default: 0,
  },
  numberOfEmployees: {
    type: Number,
    default: 0,
  },
  totalRemunerationForEmployees: {
    value: {
      type: Number,
      default: 0,
    },
    currency: {
      type: String,
      default: 'PLN',
    },
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
  contractSales: {
    value: {
      type: Number,
      default: 0,
    },
    currency: {
      type: String,
      default: 'PLN',
    },
  },
  privateSale: {
    value: {
      type: Number,
      default: 0,
    },
    currency: {
      type: String,
      default: 'PLN',
    },
  },
  gross: {
    value: {
      type: Number,
      default: 0,
    },
    currency: {
      type: String,
      default: 'PLN',
    },
  },
  netIncome: {
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