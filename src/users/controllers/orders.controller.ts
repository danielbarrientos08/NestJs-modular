import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { OrdersService } from '../services/orders.service';
import {
  CreateOrderDto,
  UpdateOrderDto,
  AddProductsToOrderDto,
} from '../dtos/order.dto';

@ApiTags('orders')
@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Get()
  findAll() {
    return this.ordersService.findAll();
  }

  @Get(':id')
  get(@Param('id') id: number) {
    return this.ordersService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateOrderDto) {
    return this.ordersService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: UpdateOrderDto) {
    return this.ordersService.update(id, payload);
  }

  // @Put(':id/products')
  // addProducts(@Param('id') id: number, @Body() payload: AddProductsToOrderDto) {
  //   return this.ordersService.addProducts(id, payload.productsIds);
  // }
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.ordersService.remove(id);
  }

  // @Delete(':id/product/:productId')
  // removeProduct(
  //   @Param('id') id: number,
  //   @Param('productId') productId: number,
  // ) {
  //   return this.ordersService.removeProduct(id, productId);
  // }
}
