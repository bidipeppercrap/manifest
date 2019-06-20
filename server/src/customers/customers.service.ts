import { Injectable, BadRequestException, Body } from '@nestjs/common';
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

  async findOne(id: string): Promise<Customer> {
    try {
      const customer = await this.customerRepository.findOneOrFail(id);
      return customer;
    } catch (error) {
      throw new BadRequestException('Invalid id');
    }
  }

  async update(id: string, customer: CreateCustomerDto) {
    try {
      await this.findOne(id);
      await this.customerRepository.update(id, customer);

      const result = await this.findOne(id);
      return result;
    } catch (error) {
      throw new BadRequestException();
    }
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
