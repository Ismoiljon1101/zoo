import { Injectable } from '@nestjs/common';

@Injectable()
export class DogService {
    public getHello(): string {
        return "WOW - WOOOW ";
    } 

    public introduce(): string {
        return "I am a apchalka, name Bobik";
    }
}
