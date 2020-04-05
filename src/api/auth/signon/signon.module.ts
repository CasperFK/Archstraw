import { Module } from '@nestjs/common';
import { SignOnController } from './signOnController';
import { SignonService } from './signon.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from '../../../schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }], 'users'),
  ],
  controllers: [SignOnController],
  providers: [SignonService],
})
export class SignonModule {}
