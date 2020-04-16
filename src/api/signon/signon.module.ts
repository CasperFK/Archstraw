import { Module } from '@nestjs/common';
import { SignonController } from './signon.controller';
import { SignonService } from './signon.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from '../../schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }], 'users'),
  ],
  controllers: [SignonController],
  providers: [SignonService],
})
export class SignonModule {}
