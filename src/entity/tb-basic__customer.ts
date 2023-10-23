import { Entity, Column, OneToMany } from 'typeorm'
import { Common } from '@/entity/tb-basic__common'
import { hashSync } from 'bcryptjs'

@Entity('tb-basic__customer')
export class BasicCustomer extends Common {
	@Column({ charset: 'utf8mb4', comment: '昵称', nullable: false })
	nickname: string

	@Column({ charset: 'utf8mb4', comment: '备注', nullable: true })
	comment: string | null

	@Column({
		comment: '密码',
		select: false,
		nullable: false,
		transformer: {
			from: value => value,
			to: value => hashSync(value)
		}
	})
	password: string
}
