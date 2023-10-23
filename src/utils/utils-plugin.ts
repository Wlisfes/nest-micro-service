import { zh_CN, Faker } from '@faker-js/faker'
import * as dayjs from 'dayjs'

/**时间处理库**/
export const moment = dayjs

/**虚拟数据库**/
export const faker = new Faker({
	locale: [zh_CN]
})
