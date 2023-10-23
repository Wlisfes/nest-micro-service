import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { BasicCustomer } from '@/entity/tb-basic__customer'
import { faker } from '@/utils/utils-plugin'

@Injectable()
export class CustomerService {
	constructor(@InjectRepository(BasicCustomer) public readonly basicCustomer: Repository<BasicCustomer>) {}

	public async httpCreateBasicCustomer() {
		const node = await this.basicCustomer.create({
			nickname: faker.person.fullName(),
			password: 'MTIzNDU2'
		})
		return await this.basicCustomer.save(node)
	}
}
