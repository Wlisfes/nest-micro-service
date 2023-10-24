import { Controller, Get } from '@nestjs/common'
import { JobScheduleService } from './job-schedule.service'

@Controller()
export class JobScheduleController {
	constructor(private readonly jobScheduleService: JobScheduleService) {}
}
