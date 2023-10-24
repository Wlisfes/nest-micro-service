import { NestFactory } from '@nestjs/core'
import { Transport, MicroserviceOptions } from '@nestjs/microservices'
import { JobScheduleModule } from '@job-schedule/job-schedule.module'

async function bootstrap() {
	const port = Number(process.env.JOB_SCHEDULE_PORT ?? 5052)
	const app = await NestFactory.createMicroservice<MicroserviceOptions>(JobScheduleModule, {
		transport: Transport.TCP,
		options: {
			port: port
		}
	})
	await app.listen().then(() => {
		console.log('MQ服务启动:', `TCP:${port}`)
	})
}
bootstrap()
