import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Truck } from './truck.entity';
import { Repository } from 'typeorm';
import { TruckDto } from './trucks.dto';
import { DriversService } from 'src/drivers/drivers.service';

@Injectable()
export class TrucksService {
  constructor(
    @InjectRepository(Truck)
    private readonly truckRepository: Repository<Truck>,
    private readonly driversService: DriversService,
  ) {}

  find() {
    const trucks = this.truckRepository.find({ relations: ['driver'] });
    return trucks;
  }

  findOne(id: string) {
    const truck = this.truckRepository.findOne(id, { relations: ['driver'] });
    return truck;
  }

  async create(truck: TruckDto) {
    truck.driver = await this.driversService.findOne(truck.driverId);
    delete truck.driverId;
    this.truckRepository.save(truck);

    return truck;
  }

  async update(id: string, truck: TruckDto) {
    truck.driver = await this.driversService.findOne(truck.driverId);
    delete truck.driverId;
    this.truckRepository.update(id, truck);

    return truck;
  }

  delete(id: string) {
    const truck = this.findOne(id);

    this.truckRepository.delete(id);
    return truck;
  }
}
