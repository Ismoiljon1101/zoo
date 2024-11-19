import { Injectable } from '@nestjs/common';

@Injectable()
export class CatService {
    public getHello(): string {
        return "MEOW";
    }

    public introduce(): string {
        return "I am a cat, name Tom";
    }
}
