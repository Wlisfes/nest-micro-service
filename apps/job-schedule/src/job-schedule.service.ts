import { Injectable } from '@nestjs/common'
import { RabbitSubscribe, AmqpConnection } from '@golevelup/nestjs-rabbitmq'
import { faker } from '@/utils/utils-plugin'
import { divineDelay } from '@/utils/utils-common'

@Injectable()
export class JobScheduleService {
	constructor(private readonly amqpConnection: AmqpConnection) {}

	// async onModuleInit() {
	// 	await divineDelay(3000)
	// }

	@RabbitSubscribe({
		exchange: 'nodemailer',
		routingKey: 'nodemailer-subscribe',
		queue: 'nodemailer-subscribe'
	})
	public async SubscribeNodemailer(data: Buffer) {
		console.log('content:', JSON.parse(data.toString()))
	}

	async sendMethod() {
		const data = {
			nickname: faker.person.fullName(),
			password: 'MTIzNDU2'
		}
		console.log(data)
		await this.amqpConnection.publish('nodemailer', 'nodemailer-subscribe', data)
		this.sendMethod()
	}
}
