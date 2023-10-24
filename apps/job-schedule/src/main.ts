import { NestFactory } from '@nestjs/core'
import { JobScheduleModule } from './job-schedule.module'

async function bootstrap() {
	const app = await NestFactory.create(JobScheduleModule)
	await app.listen(3000)
}
bootstrap()
