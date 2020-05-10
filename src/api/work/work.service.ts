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
      const answer = await newWorkDay.save();
      return answer;
    }
    return day;
  }

  async addWorkerToWorkDay(worker: WorkerModel, thisWorkDay: string): Promise<any> {
      const answer = await this.workDayModel.updateOne({date: thisWorkDay, 'employees.id': {$nin:[worker.id]}}, {$push: {employees: worker}})
    if (answer) return 'true';
    return 'false';
  }

  async updateWorkerState(worker: {state: string, id: string | number, date: string}): Promise<any> {
    const answer = await this.workDayModel.updateOne({date: worker.date, 'employees.id': worker.id}, { $set: {'employees.$.state': worker.state} })
    if (answer) return 'true';
    return 'false';
  }

  async updateWorkerSalaryStatus(worker: {salaryStatus: boolean, id: string, date: string}): Promise<any> {
    const answer = await this.workDayModel.updateOne({date: worker.date, 'employees.id': worker.id}, { $set: {'employees.$.salaryStatus': worker.salaryStatus} })
    if (answer) return 'true';
    return 'false';

  }

  async getAllWorkers(): Promise<WorkerModel[]> {
    const workers = await this.workerModel.find();
    return workers;
  }
}
