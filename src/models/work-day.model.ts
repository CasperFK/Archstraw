import { Document} from 'mongoose';

interface Worker {
  name: string,
  surname: string,
  startWork?: string,
  endWork?: string,
  state?: number,
}

export interface WorkDayModel extends Document {
  date: string,
  ratio: string,
  employees: Worker[],
}