import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('root')
  async createRoot(
    @Body() createUserDto: CreateUserDto,
  ): Promise<CreateUserDto> {
    const user = await this.usersService.createRoot(createUserDto);
    return user;
  }
}
