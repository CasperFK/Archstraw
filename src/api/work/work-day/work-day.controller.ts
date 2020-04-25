import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/jwt-auth/jwt-auth.guard';
import { WorkService } from '../work.service';
import { WorkDayModel } from '../../../models/work-day.model';
import { worker } from 'cluster';

interface Worker {
  name: string,
  surname: string,
  phoneNumber: string,
  startWork: string,
  endWork: string,
  state: number,
  date: string,
  _id: string,
}

interface WorkDay {
  date: String,
  ratio: String,
  employees: Worker[],
}

@Controller('/api/work-day/')
export class WorkDayController {
  constructor(private workService: WorkService) {
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async createWorkDay(@Body() workDay: WorkDayModel) : Promise<string> {
    const day = await this.workService.createWorkDay(workDay);
    return day;
  }
}