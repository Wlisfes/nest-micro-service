import { Test, TestingModule } from '@nestjs/testing';
import { JobScheduleController } from './job-schedule.controller';
import { JobScheduleService } from './job-schedule.service';

describe('JobScheduleController', () => {
  let jobScheduleController: JobScheduleController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [JobScheduleController],
      providers: [JobScheduleService],
    }).compile();

    jobScheduleController = app.get<JobScheduleController>(JobScheduleController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(jobScheduleController.getHello()).toBe('Hello World!');
    });
  });
});
