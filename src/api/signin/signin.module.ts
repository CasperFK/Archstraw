import { Module } from '@nestjs/common';
import { SigninController } from './signin.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from '../../schemas/user.schema';
import { SigninService } from './signin.service';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [UsersModule],
  controllers: [SigninController],
  providers: [SigninService],
})
export class SigninModule {}
