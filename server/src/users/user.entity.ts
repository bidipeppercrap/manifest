import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 250 })
  email: string;

  @Column({ length: 512 })
  password: string;

  @Column({ length: 250 })
  role: string;
}
