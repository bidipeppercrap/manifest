import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtPayload } from './interfaces/jwt-payload.interface';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  signIn(@Body() user: JwtPayload) {
    const token = this.authService.signIn(user);
    return token;
  }
}
