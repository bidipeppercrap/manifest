import { Injectable, BadRequestException } from '@nestjs/common';
import { Driver } from './driver.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { DriverDto } from './drivers.dto';

@Injectable()
export class DriversService {
  constructor(
    @InjectRepository(Driver)
    private readonly driverRepository: Repository<Driver>,
  ) {}

  find() {
    return this.driverRepository.find({ relations: ['trucks'] });
  }

  findOne(id: string) {
    const driver = this.driverRepository.findOne(id, { relations: ['trucks'] });
    if (!driver) {
      throw new BadRequestException();
    }

    return driver;
  }

  create(driver: DriverDto) {
    return this.driverRepository.save(driver);
  }

  update(id: string, driver: DriverDto) {
    this.driverRepository.update(id, driver);
    return this.findOne(id);
  }

  delete(id: string) {
    const driver = this.findOne(id);
    this.driverRepository.delete(id);
    return driver;
  }
}
