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
}

@Controller('/api/workers')
export class WorkerController {
  constructor(private workService: WorkService) {
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async createWorker(@Body() body: WorkerModel) : Promise<string> {
    const {startWork, endWork, state, date, ...worker} : WorkerModel = body;
    const _id = await this.workService.createWorker(worker as WorkerModel);
    const { phoneNumber, ...newWorker} : WorkerModel = body;
    const answer = await this.workService.addWorkerToWorkDay({ ...newWorker, startWork, endWork, state, _id} as WorkerModel, date);
    return answer;
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async getWorkers() : Promise<WorkerModel[]> {
    return await this.workService.getAllWorkers();
  }
}