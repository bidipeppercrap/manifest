import { Column, PrimaryGeneratedColumn, OneToMany, Entity } from 'typeorm';
import { Truck } from 'src/trucks/truck.entity';

@Entity()
export class Driver {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 250 })
  name: string;

  @OneToMany(type => Truck, truck => truck.driver)
  trucks: Truck[];
}
