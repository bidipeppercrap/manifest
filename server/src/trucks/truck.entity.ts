import { PrimaryGeneratedColumn, Column, ManyToOne, Entity } from 'typeorm';
import { Driver } from 'src/drivers/driver.entity';

@Entity()
export class Truck {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 250 })
  plateNumber: string;

  @ManyToOne(type => Driver, driver => driver.trucks)
  driver: Driver;
}
