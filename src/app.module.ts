import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from './api/api.module';

import { join } from 'path';

@Module({
  imports: [
    ApiModule,
    ConfigModule.forRoot(),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '.', 'src/public/build')
    }),
    MongooseModule.forRoot(
      'mongodb+srv://duzyD20Brot9911her32M9710:TD8EIphNzYh0ZNzb@cluster0archstraw-fxmmt.mongodb.net/users?retryWrites=true&w=majority',
      { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, connectionName: 'users' },
    ),
    MongooseModule.forRoot('mongodb+srv://duzyD20Brot9911her32M9710:TD8EIphNzYh0ZNzb@cluster0archstraw-fxmmt.mongodb.net/work?retryWrites=true&w=majority',
      { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, connectionName: 'work' },)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
