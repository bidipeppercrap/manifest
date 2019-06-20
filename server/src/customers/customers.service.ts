import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from './customer.entity';
import { Repository } from 'typeorm';
import { CreateCustomerDto } from 'dist/customers/dto/create-customer.dto';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
  ) {}

  findAll(): Promise<Customer[]> {
    return this.customerRepository.find();
  }

  create(customer: CreateCustomerDto): Promise<Customer> {
    return this.customerRepository.save(customer);
  }

  async remove(id: string): Promise<Customer> {
    try {
      const customer = await this.customerRepository.findOneOrFail(id);
      await this.customerRepository.delete(id);
      return customer;
    } catch (error) {
      throw new BadRequestException();
    }
  }
}
