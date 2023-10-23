import { Module } from '@nestjs/common'
import { CustomerService } from '@basic/customer/customer.service'
import { CustomerController } from '@basic/customer/customer.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { BasicCustomer } from '@/entity/tb-basic__customer'

@Module({
	imports: [TypeOrmModule.forFeature([BasicCustomer])],
	providers: [CustomerService],
	controllers: [CustomerController]
})
export class CustomerModule {}
