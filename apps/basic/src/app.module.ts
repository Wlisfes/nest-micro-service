import { Module } from '@nestjs/common'
import { ConfigerModule } from '@app/configer/configer.module'
import { AppController } from '@basic/app.controller'
import { AppService } from '@basic/app.service'
import { CustomerModule } from '@basic/customer/customer.module'

@Module({
	imports: [ConfigerModule, CustomerModule],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {}
