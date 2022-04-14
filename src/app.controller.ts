import { Controller, Get, UseGuards, SetMetadata } from '@nestjs/common';
import { AppService } from './app.service';
import { Public } from './auth/decorators/public.decorator';
import { ApikeyGuard } from './auth/guards/apikey.guard';
@UseGuards(ApikeyGuard)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @SetMetadata('isPublic', true)
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/test')
  // @SetMetadata('isPublic', true)
  test() {
    return 'yo soy nuevo';
  }
  @Get('/test2')
  @Public()
  test2() {
    return 'yo soy nuevo';
  }
}
