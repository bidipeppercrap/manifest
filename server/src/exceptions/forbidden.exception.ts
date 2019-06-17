import { HttpException, HttpStatus } from '@nestjs/common';

export class ForbiddenException extends HttpException {
    constructor() {
        super('This is not gonna work', HttpStatus.FORBIDDEN);
    }
}