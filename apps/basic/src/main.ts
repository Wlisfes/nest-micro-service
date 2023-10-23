import { NestFactory } from '@nestjs/core'
import { AppModule } from '@basic/app.module'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)
	const port = Number(process.env.BASIC_PORT ?? 5050)

	await app.listen(port, () => {
		console.log('基础服务启动:', `http://localhost:${port}`)
		console.log(`http://localhost:${port}/api-doc`)
	})
}
bootstrap()
