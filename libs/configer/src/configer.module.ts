import { Module, Global } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { ConfigerService } from '@app/configer/configer.service'
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm'
import { BasicCustomer } from '@/entity/tb-basic__customer'

@Global()
@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			envFilePath: [`.env.${process.env.NODE_ENV.trim()}`]
		}),
		TypeOrmModule.forRootAsync({
			inject: [ConfigService],
			useFactory: (configService: ConfigService): TypeOrmModuleOptions => {
				return {
					type: configService.get('ORM_TYPE'),
					host: configService.get('ORM_HOST'),
					port: parseInt(configService.get('ORM_PORT')),
					username: configService.get('ORM_USERNAME'),
					password: configService.get('ORM_PASSWORD'),
					database: configService.get('ORM_DATABASE'),
					charset: configService.get('ORM_CHARSET'),
					synchronize: Boolean(JSON.parse(configService.get('ORM_SYNCHRONIZE'))),
					dateStrings: Boolean(JSON.parse(configService.get('ORM_DATESTRINGS'))),
					entities: [BasicCustomer]
				} as TypeOrmModuleOptions
			}
		})
	],
	providers: [ConfigerService],
	exports: [ConfigerService]
})
export class ConfigerModule {}
