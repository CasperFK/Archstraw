import { Body, Controller, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/jwt-auth/jwt-auth.guard';
import { WorkService } from '../work.service';
import { WorkDayModel } from '../../../models/work-day.model';

@Controller('/api/')
export class WorkDayController {
  constructor(private workService: WorkService) {
  }

  @UseGuards(JwtAuthGuard)
  @Post('new-day')
  async createWorkDay(@Body() workDay: WorkDayModel) : Promise<string> {
    return await this.workService.createWorkDay(workDay);
  }

  @UseGuards(JwtAuthGuard)
  @Put('update-state')
  async updateState(@Body() worker: {state: string, id: string, date: string}) : Promise <boolean> {
    return await this.workService.updateWorkerState(worker);
  }

  @UseGuards(JwtAuthGuard)
  @Put('update-salary-status')
  async updateSalaryStatus(@Body() worker: {salaryStatus: boolean, id: string, date: string}) : Promise <any> {
    return await this.workService.updateWorkerSalaryStatus(worker);
  }
}