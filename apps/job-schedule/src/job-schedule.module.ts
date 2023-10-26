import { Module } from '@nestjs/common'
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq'
import { JobScheduleController } from '@job-schedule/job-schedule.controller'
import { JobScheduleService } from '@job-schedule/job-schedule.service'

@Module({
	imports: [
		RabbitMQModule.forRoot(RabbitMQModule, {
			exchanges: [{ name: 'nodemailer', type: 'topic' }],
			uri: 'amqp://admin:GsdeDxAW@121.199.41.193:5672',
			connectionInitOptions: { wait: false },
			channels: {
				global: {
					prefetchCount: 5,
					default: true
				}
			},
			deserializer: (message: Buffer) => {
				return message
			},
			serializer: msg => {
				return Buffer.from(JSON.stringify(msg))
			}
		})
	],
	controllers: [JobScheduleController],
	providers: [JobScheduleService]
})
export class JobScheduleModule {}
