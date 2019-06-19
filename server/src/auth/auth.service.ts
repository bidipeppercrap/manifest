import { JwtService } from '@nestjs/jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(payload: JwtPayload): Promise<string> {
    const user = await this.validateUser(payload);
    return this.jwtService.sign(user);
  }

  async validateUser(payload: JwtPayload) {
    return this.usersService.validate(payload);
  }

  auth(token: string) {
    try {
      return this.jwtService.verify(token);
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }
}
