import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Order } from '../entities/order.entity';
import { CreateOrderDto } from '../dtos/order.dto';

@Injectable()
export class OrdersService {
  constructor(@InjectRepository(Order) private orderRepo: Repository<Order>) {}

  async findAll() {
    return await this.orderRepo.find();
  }

  async findOne(id: number) {
    const order = await this.orderRepo.findOne();
    if (!order) {
      throw new NotFoundException(`order #${id} not found`);
    }
    return order;
  }

  // async create(data: CreateOrderDto) {
  //   const newOrder = this.orderRepo.create();
  //   return this.orderRepo.save(newOrder);
  // }

  // async update(id: number, changes: UpdateOrderDto) {
  //   const order = await this.findOne(id);
  //   this.orderRepo.merge(order, changes);
  //   return this.orderRepo.save(order);
  // }

  async remove(id: number) {
    const order = await this.findOne(id);
    return this.orderRepo.delete(order);
  }
}
