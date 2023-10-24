import { Module } from '@nestjs/common';
import { JobScheduleController } from './job-schedule.controller';
import { JobScheduleService } from './job-schedule.service';

@Module({
  imports: [],
  controllers: [JobScheduleController],
  providers: [JobScheduleService],
})
export class JobScheduleModule {}
