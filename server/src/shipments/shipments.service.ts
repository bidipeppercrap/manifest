import {
  Injectable,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Shipment } from './shipment.entity';
import { Repository } from 'typeorm';
import { ShipmentDto } from './shipment.dto';

@Injectable()
export class ShipmentsService {
  constructor(
    @InjectRepository(Shipment)
    private readonly shipmentRepository: Repository<Shipment>,
  ) {}

  find(limit: number, page: number) {
    try {
      limit = !limit ? 10 : limit;
      page = !page ? 1 : page;
      const skip = page - 1 * limit;

      return this.shipmentRepository.find({
        relations: ['manifests'],
        take: limit,
        skip,
      });
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  findOne(id: string) {
    try {
      return this.shipmentRepository.findOneOrFail(id);
    } catch (error) {
      throw new BadRequestException();
    }
  }

  create(shipment: ShipmentDto) {
    try {
      this.shipmentRepository.save(shipment);
      return shipment;
    } catch (error) {
      throw new BadRequestException();
    }
  }

  update(id: string, shipment: ShipmentDto) {
    try {
      this.shipmentRepository.update(id, shipment);
      return this.findOne(id);
    } catch (error) {
      throw new BadRequestException();
    }
  }

  destroy(id: string) {
    try {
      this.shipmentRepository.delete(id);
    } catch (error) {
      throw new BadRequestException();
    }
  }
}
