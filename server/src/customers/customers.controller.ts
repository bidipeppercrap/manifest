import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  UsePipes,
} from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { JoiValidationPipe } from 'src/joi-validation.pipe';
import { Roles } from 'src/roles.decorator';
import createCustomerSchema from './schema/create-customer.schema';

@Controller('customers')
export class CustomersController {
  @Post()
  @Roles('root')
  @UsePipes(new JoiValidationPipe(createCustomerSchema))
  async create(
    @Body() createCustomerDto: CreateCustomerDto,
  ): Promise<CreateCustomerDto> {
    return createCustomerDto;
  }

  @Get()
  @Roles()
  findAll(): string {
    return 'This should return a list of customers';
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This should return a customer with an Id of: ${id}`;
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCustomerDto: CreateCustomerDto,
  ): Promise<CreateCustomerDto> {
    return updateCustomerDto;
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<CreateCustomerDto> {
    return null;
  }
}
