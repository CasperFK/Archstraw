import { Module } from '@nestjs/common';
import { SigninController } from './signin.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from '../../schemas/user.schema';
import { SigninService } from './signin.service';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'User', schema: UserSchema}], 'users'),
  ],
  controllers: [SigninController],
  providers: [SigninService],
})
export class SigninModule {}
