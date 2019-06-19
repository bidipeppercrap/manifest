import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';
import { APP_GUARD, APP_PIPE, APP_FILTER } from '@nestjs/core';
import { RolesGuard } from './roles.guard';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ValidationPipe } from './validation.pipe';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpExceptionFilter } from './http-exception.filter';

@Module({
  imports: [TypeOrmModule.forRoot(), CustomersModule, AuthModule, UsersModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}
