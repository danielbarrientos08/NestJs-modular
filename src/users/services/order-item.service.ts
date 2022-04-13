import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateOrderItemDto, UpdateOrderItemDto } from '../dtos/order-item.dto';
import { Order } from '../entities/order.entity';
import { OrderItem } from '../entities/order-item.entity';
import { Product } from '../../products/entities/product.entity';
import { IsNotEmpty } from 'class-validator';

@Injectable()
export class OrderItemService {
  constructor(
    @InjectRepository(Order) private orderRepo: Repository<Order>,
    @InjectRepository(Product) private productRepo: Repository<Product>,
    @InjectRepository(OrderItem) private orderItemtRepo: Repository<OrderItem>,
  ) {}

  async create(data: CreateOrderItemDto) {
    const order = await this.orderRepo.findOne(data.orderId);
    const product = await this.productRepo.findOne(data.productId);
    const item = new OrderItem();
    item.order = order;
    item.product = product;
    item.quantity = data.quantity;

    return this.orderItemtRepo.save(item);
  }
}
