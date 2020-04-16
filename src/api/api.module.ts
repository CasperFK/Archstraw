import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ApiController } from './api.controller';
import { SigninModule } from './signin/signin.module';
import { SignonModule } from './signon/signon.module';

@Module({
  imports: [AuthModule, SigninModule, SignonModule],
  controllers: [ApiController],
  providers: [],
  exports: [],
})
export class ApiModule {}
