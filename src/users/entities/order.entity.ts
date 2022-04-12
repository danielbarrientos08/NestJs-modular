import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';
@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;
}
