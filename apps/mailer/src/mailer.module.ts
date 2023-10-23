import { Module } from '@nestjs/common'
import { ConfigerModule } from '@app/configer/configer.module'
import { MailerController } from './mailer.controller'
import { MailerService } from './mailer.service'

@Module({
	imports: [ConfigerModule],
	controllers: [MailerController],
	providers: [MailerService]
})
export class MailerModule {}
