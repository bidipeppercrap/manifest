import { PrimaryGeneratedColumn, Column, ManyToOne, Entity } from 'typeorm';
import { Truck } from 'src/trucks/truck.entity';

@Entity()
export class Shipment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('date')
  date: string;

  @Column('text')
  note: string;

  @ManyToOne(type => Truck, truck => truck.shipments)
  truck: Truck;
}
