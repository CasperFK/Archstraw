import { Module } from '@nestjs/common';
import { SignInController } from './signInController';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from '../../../schemas/user.schema';
import { SigninService } from './signin.service';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'User', schema: UserSchema}], 'users'),
  ],
  controllers: [SignInController],
  providers: [SigninService],
})
export class SigninModule {}
