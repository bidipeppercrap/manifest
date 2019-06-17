import { Controller, Get, Param, Post, Body, Put, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Controller('customers')
export class CustomersController {
    @Post()
    async create(@Body() createCustomerDto: CreateCustomerDto): Promise<CreateCustomerDto> {
        return createCustomerDto;
    }

    @Get()
    findAll(): string {
        return 'This should return a list of customers';
    }

    @Get(':id')
    findOne(@Param('id') id: string): string {
        return `This should return a customer with an Id of: ${id}`;
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateCustomerDto: CreateCustomerDto): Promise<CreateCustomerDto> {
        return updateCustomerDto;
    }

    @Delete(':id')
    async remove(@Param('id') id: string): Promise<CreateCustomerDto> {
        throw new HttpException('It\'s not gonna work', HttpStatus.FORBIDDEN);
    }
}
