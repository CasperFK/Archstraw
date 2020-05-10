import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { WorkService } from '../work.service';
import { JwtAuthGuard } from '../../auth/jwt-auth/jwt-auth.guard';
import { WorkerModel } from '../../../models/worker.model';

interface Worker {
  name: string,
  surname: string,
  phoneNumber: string,
  startWork?: string,
  endWork?: string,
  state?: number,
  date?: string,
  _id?: string,
}

@Controller('/api/')
export class WorkerController {
  constructor(private workService: WorkService) {
  }

  @UseGuards(JwtAuthGuard)
  @Post('new-employee')
  async createWorker(@Body() body: WorkerModel) : Promise<string> {
    const {startWork, endWork, state, date, ...worker} : WorkerModel = body;
    const id = await this.workService.createWorker(worker as WorkerModel);
    const { phoneNumber, _id, ...newWorker} : WorkerModel = body;
    const answer = await this.workService.addWorkerToWorkDay({ ...newWorker, startWork, endWork, state, id} as WorkerModel, date);
    if (answer) return id;
    return 'false';
  }

  @UseGuards(JwtAuthGuard)
  @Get('get-employee')
  async getWorkers() : Promise<WorkerModel[]> {
    return await this.workService.getAllWorkers();
  }

  @UseGuards(JwtAuthGuard)
  @Post('new-employee-select')
  async addWorkerToWorkDay(@Body() body: Worker) : Promise<boolean> {
    try {
      const {date, phoneNumber, ...worker}  = body;
      await this.workService.addWorkerToWorkDay(worker as WorkerModel, date);
      return true;
    } catch (e) {
      return e;
    }
  }
}