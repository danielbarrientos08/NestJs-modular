import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';
@Entity()
export class Brand {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', unique: true })
  name: string;

  @Column({ type: 'varchar', length: 100 })
  image: string;
}
