import { Module } from '@nestjs/common';
import { SignonController } from './signon.controller';
import { SignonService } from './signon.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from '../../schemas/user.schema';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [SignonController],
  providers: [SignonService],
})
export class SignonModule {}
