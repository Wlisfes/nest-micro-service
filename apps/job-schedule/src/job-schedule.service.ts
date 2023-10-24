import { Injectable } from '@nestjs/common';

@Injectable()
export class JobScheduleService {
  getHello(): string {
    return 'Hello World!';
  }
}
