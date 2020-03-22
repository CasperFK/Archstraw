import { Module } from '@nestjs/common';
import { SignInController } from './signin/signInController';
import { SignOnController } from './signon/signOnController';

@Module({
  imports: [],
  controllers: [SignInController, SignOnController],
  providers: [],
})
export class AuthModule {}
