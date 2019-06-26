import {
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  Entity,
  OneToMany,
} from 'typeorm';
import { Driver } from 'src/drivers/driver.entity';
import { Shipment } from 'src/shipments/shipment.entity';

@Entity()
export class Truck {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 250 })
  plateNumber: string;

  @ManyToOne(type => Driver, driver => driver.trucks)
  driver: Driver;

  @OneToMany(type => Shipment, shipment => shipment.truck)
  shipments: Shipment[];
}
