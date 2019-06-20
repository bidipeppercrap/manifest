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
    return this.customersService.create(createCustomerDto);
  }

  @Get()
  @Roles('root', 'debt_collector')
  findAll() {
    return this.customersService.findAll();
  }

  @Get(':id')
  @Roles('root', 'debt_collector')
  findOne(@Param() { id }: FindOneParams) {
    return this.customersService.findOne(id);
  }

  @Put(':id')
  @Roles('root')
  async update(
    @Param() { id }: FindOneParams,
    @Body() updateCustomerDto: CreateCustomerDto,
  ): Promise<CreateCustomerDto> {
    return this.customersService.update(id, updateCustomerDto);
  }

  @Delete(':id')
  @Roles('root')
  async remove(@Param() { id }: FindOneParams): Promise<CreateCustomerDto> {
    return this.customersService.remove(id);
  }
}
