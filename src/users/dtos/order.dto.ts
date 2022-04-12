import { IsMongoId, IsNotEmpty, IsDate, IsArray } from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto {
  @IsNotEmpty()
  @IsMongoId()
  @ApiProperty()
  readonly customer: string;

  @IsDate()
  @IsNotEmpty()
  @ApiProperty()
  readonly date: Date;
}

export class AddProductsToOrderDto {
  @IsArray()
  @IsNotEmpty()
  readonly productsIds: string[];
}
