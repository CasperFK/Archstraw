import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ApiController } from './api.controller';

@Module({
  imports: [AuthModule],
  controllers: [ApiController],
  providers: [],
  exports: [],
})
export class ApiModule {}
