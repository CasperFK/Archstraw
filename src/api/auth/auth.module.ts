import { Module } from '@nestjs/common';
import { SigninModule } from './signin/signin.module';
import { SignonModule } from './signon/signon.module';

@Module({
  imports: [SigninModule, SignonModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AuthModule {}
