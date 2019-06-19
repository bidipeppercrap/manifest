import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 250 })
  name: string;

  @Column({ length: 250, nullable: true })
  phone: string;

  @Column({ length: 250, nullable: true })
  email: string;

  @Column({ length: 250, nullable: true })
  address: string;

  @Column('int', { nullable: true })
  priceThreshold: number;

  @Column('int', { nullable: true })
  ageThreshold: number;

  @Column({ default: false })
  debtCollecting: boolean;

  @Column({ default: false })
  mailing: boolean;
}
