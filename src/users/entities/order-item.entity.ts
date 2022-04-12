import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  UpdateDateColumn,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';

import { Product } from '../../products/entities/product.entity';
import { Order } from './order.entity';
@Entity()
export class OrderItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  quantity: number;

  @CreateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  created_at: Date;

  @UpdateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updated_at: Date;

  @ManyToOne(() => Product)
  product: Product;

  @ManyToOne(() => Order, (order) => order.items)
  order: Order;
}
