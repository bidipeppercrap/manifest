import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  validate(user) {
    return { email: user.email, roles: user.roles };
  }
}
