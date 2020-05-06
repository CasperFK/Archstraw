import * as mongoose from 'mongoose';

export const WorkDay: mongoose.Schema = new mongoose.Schema<any>({
  date: String,
  ratio: String,
  employees: [{
    name: String,
    surname: String,
    startWork: String,
    endWork: String,
    state: String,
    id: String,
    salaryStatus: Boolean,
  }],
})