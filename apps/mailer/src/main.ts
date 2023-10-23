import { NestFactory } from '@nestjs/core'
import { Transport, MicroserviceOptions } from '@nestjs/microservices'
import { MailerModule } from '@mailer/mailer.module'

async function bootstrap() {
	const app = await NestFactory.create(MailerModule)
	const port = Number(process.env.MAILER_PORT ?? 5051)
	app.connectMicroservice<MicroserviceOptions>({
		transport: Transport.TCP,
		options: {
			port: port
		}
	})
	await app.startAllMicroservices()
	await app.listen(port, () => {
		console.log('邮件服务启动:', `http://localhost:${port}`)
	})
}
bootstrap()
