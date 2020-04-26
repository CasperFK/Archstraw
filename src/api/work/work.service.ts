import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { WorkerModel } from '../../models/worker.model';
import { WorkDayModel } from '../../models/work-day.model';

@Injectable()
export class WorkService {
  constructor(
    @InjectModel('workers') private workerModel: Model<WorkerModel>,
    @InjectModel('working-day') private workDayModel: Model<WorkDayModel>,
    @InjectConnection('work') connection: Connection,
  ) {
  }

  async createWorker(worker: WorkerModel): Promise<any> {
    const newWorker = new this.workerModel(worker);
    const answer = await newWorker.save();
    return answer._id;
  }

  async createWorkDay(workDay: WorkDayModel): Promise<any> {
    const day = await this.workDayModel.findOne({date: workDay.date});
    if (!day) {
      const newWorkDay = new this.workDayModel(workDay);
      await newWorkDay.save();
      return true;
    }
    return day;
  }

  async addWorkerToWorkDay(worker: WorkerModel, thisWorkDay: string): Promise<any> {
    const workDay = await this.workDayModel.findOne({ date: thisWorkDay });
    const answer = await this.workDayModel.updateOne({date: thisWorkDay}, {$set: {employees: [...workDay.employees, worker]}})
    return answer;
  }

  async getAllWorkers(): Promise<WorkerModel[]> {
    const workers = await this.workerModel.find();
    return workers;
  }
}
