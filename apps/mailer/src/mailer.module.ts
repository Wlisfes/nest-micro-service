import { Module } from '@nestjs/common'
import { ConfigerModule } from '@app/configer/configer.module'
import { MailerController } from './mailer.controller'
import { MailerService } from './mailer.service'
import { ScheduleModule } from './schedule/schedule.module';

@Module({
	imports: [ConfigerModule, ScheduleModule],
	controllers: [MailerController],
	providers: [MailerService]
})
export class MailerModule {}
