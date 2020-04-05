import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from './api/api.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ApiModule,
    MongooseModule.forRoot(
      'mongodb+srv://duzyD20Brot9911her32M9710:TD8EIphNzYh0ZNzb@cluster0archstraw-fxmmt.mongodb.net/users?retryWrites=true&w=majority',
      { useNewUrlParser: true, useUnifiedTopology: true, connectionName: 'users' },
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
