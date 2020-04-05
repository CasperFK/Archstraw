import { Module } from '@nestjs/common';
import { SignInController } from './signInController';

@Module({
  imports: [],
  controllers: [SignInController],
  providers: [],
})
export class SigninModule {}
