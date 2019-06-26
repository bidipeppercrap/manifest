import { PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Truck } from 'src/trucks/truck.entity';

export class Shipment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('date')
  date: string;

  @Column('text')
  note: string;

  @ManyToMany(type => Truck, truck => truck.shipments)
  truck: Truck;
}
