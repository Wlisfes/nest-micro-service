import { NestFactory } from '@nestjs/core'
import { ValidationPipe } from '@nestjs/common'
import { Transport, MicroserviceOptions } from '@nestjs/microservices'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { AppModule } from '@basic/app.module'
import * as express from 'express'
import * as cookieParser from 'cookie-parser'

async function useSwagger(app) {
	const options = new DocumentBuilder()
		.setTitle(`Nest-Basic-Service`)
		.setDescription(`Nest-Basic-Service Api Documentation`)
		.setVersion(`1.0.0`)
		.addBearerAuth({ type: 'apiKey', name: `authorization`, in: 'header' }, `authorization`)
		.build()
	const document = SwaggerModule.createDocument(app, options)
	SwaggerModule.setup('api-doc', app, document, {
		customSiteTitle: `基础服务端API文档`,
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
	const app = await NestFactory.create(AppModule)
	const port = Number(process.env.BASIC_PORT ?? 5050)

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
		console.log('基础服务启动:', `http://localhost:${port}`, `http://localhost:${port}/api-doc`)
	})
}
bootstrap()
