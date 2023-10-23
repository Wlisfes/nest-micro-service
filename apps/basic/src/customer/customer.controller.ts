import { Controller } from '@nestjs/common'
import { CustomerService } from '@basic/customer/customer.service'

@Controller('customer')
export class CustomerController {
	constructor(private readonly customerService: CustomerService) {}
}
