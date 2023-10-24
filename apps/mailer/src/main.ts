import { NestFactory } from '@nestjs/core'
import { ValidationPipe } from '@nestjs/common'
import { Transport, MicroserviceOptions } from '@nestjs/microservices'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { MailerModule } from '@mailer/mailer.module'
import * as express from 'express'
import * as cookieParser from 'cookie-parser'

async function useSwagger(app) {
	const options = new DocumentBuilder()
		.setTitle(`Nest-Mailer-Service`)
		.setDescription(`Nest-Mailer-Service Api Documentation`)
		.setVersion(`1.0.0`)
		.addBearerAuth({ type: 'apiKey', name: `authorization`, in: 'header' }, `authorization`)
		.build()
	const document = SwaggerModule.createDocument(app, options)
	SwaggerModule.setup('api-doc', app, document, {
		customSiteTitle: `邮件服务端API文档`,
		swaggerOptions: {
			defaultModelsExpandDepth: -1,
			defaultModelExpandDepth: 5,
			filter: true,
			docExpansion: 'none'
		}
	})
	return app
}

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
	//允许跨域
	app.enableCors()
	app.use(cookieParser())
	//解析body参数
	app.use(express.json())
	app.use(express.urlencoded({ extended: true }))
	//全局注册验证管道
	app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }))
	//文档挂载
	await useSwagger(app)
	//监听http端口
	await app.listen(port, () => {
		console.log('邮件服务启动:', `http://localhost:${port}`, `http://localhost:${port}/api-doc`)
	})
}
bootstrap()
