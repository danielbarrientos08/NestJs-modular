import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { DatabaseModule } from './database/database.module';
import { HttpModule, HttpService } from '@nestjs/axios';

@Module({
  imports: [UsersModule, ProductsModule, DatabaseModule, HttpModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'TASKS',
      useFactory: async (http: HttpService) => {
        const tasks = await http
          .get('https://jsonplaceholder.typicode.com/todos')
          .toPromise()
          .then((resp) => {
            return resp.data;
          });
        return tasks;
      },
      inject: [HttpService],
    },
  ],
})
export class AppModule {}
