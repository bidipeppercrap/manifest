import {
  Injectable,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Shipment } from './shipment.entity';
import { Repository } from 'typeorm';
import { ShipmentDto } from './shipment.dto';
import { Between } from 'typeorm';

@Injectable()
export class ShipmentsService {
  constructor(
    @InjectRepository(Shipment)
    private readonly shipmentRepository: Repository<Shipment>,
  ) {}

  find(limit: number, page: number, after?: string, before?: string) {
    try {
      limit = !limit ? 10 : limit;
      page = !page ? 1 : page;
      const skip = page - 1 * limit;
      after = !after ? '0000-00-00' : after;
      before = !before ? '9999-01-01' : before;
      const date = Between(after, before);

      return this.shipmentRepository.find({
        relations: ['truck'],
        take: limit,
        skip,
        where: {
          date,
        },
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
