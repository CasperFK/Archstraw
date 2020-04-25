import { Document, Model } from 'mongoose';

export interface WorkerModel extends Document {
  name: string,
  surname: string,
  phoneNumber: string,
  startWork?: string,
  endWork?: string,
  state?: number,
  date?: string,
}