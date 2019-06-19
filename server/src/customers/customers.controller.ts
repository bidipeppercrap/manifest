import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { Roles } from 'src/roles.decorator';
import { FindOneParams } from 'src/find-one.params';
import { CustomersService } from './customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Post()
  @Roles('root')
  async create(
    @Body() createCustomerDto: CreateCustomerDto,
  ): Promise<CreateCustomerDto> {
    return createCustomerDto;
  }

  @Get()
  findAll() {
    return this.customersService.findAll();
  }

  @Get(':id')
  findOne(@Param() { id }: FindOneParams): string {
    return `This should return a customer with an Id of: ${id}`;
  }

  @Put(':id')
  async update(
    @Param() { id }: FindOneParams,
    @Body() updateCustomerDto: CreateCustomerDto,
  ): Promise<CreateCustomerDto> {
    return updateCustomerDto;
  }

  @Delete(':id')
  async remove(@Param() { id }: FindOneParams): Promise<CreateCustomerDto> {
    return null;
  }
}
