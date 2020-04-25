import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WorkerSchema } from '../../schemas/worker.schema';
import { WorkService } from './work.service';
import { WorkDayController } from './work-day/work-day.controller';
import { WorkerController } from './worker/worker.controller';
import { WorkDay } from '../../schemas/work-day.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'workers', schema: WorkerSchema}, {name: 'working-day', schema: WorkDay}], 'work')
  ],
  providers: [WorkService],
  controllers: [
    WorkDayController,
    WorkerController,
  ],
})
export class WorkModule {
}