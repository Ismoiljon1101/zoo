import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getDetail(): string {
    return 'Here are zoo details!';
  }
}
