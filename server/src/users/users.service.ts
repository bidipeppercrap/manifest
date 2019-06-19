import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { JwtPayload } from 'src/auth/interfaces/jwt-payload.interface';
import env from 'env';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  Cryptr = require('cryptr');
  cryptr = new this.Cryptr(env.keyPassword);

  async validate(user: JwtPayload) {
    const validation = await this.userRepository.find({
      email: user.email,
    });

    if (validation.length === 0) {
      throw new UnauthorizedException('Invalid email');
    }
    if (user.password !== this.cryptr.decrypt(validation[0].password)) {
      throw new UnauthorizedException('Invalid password');
    }

    const { email, role } = validation[0];
    return { email, role };
  }

  async createRoot(user: CreateUserDto): Promise<CreateUserDto> {
    const users = await this.userRepository.find({ role: 'root' });
    if (users.length > 0) {
      throw new UnauthorizedException('Root already exists');
    }

    user.role = 'root';
    this.create(user);

    return { email: user.email, role: user.role };
  }

  async create(user: CreateUserDto) {
    user.password = await this.cryptr.encrypt(user.password);
    await this.userRepository.save(user);

    return user;
  }
}
