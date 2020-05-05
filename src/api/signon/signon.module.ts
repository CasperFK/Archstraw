import { Module } from '@nestjs/common';
import { SignonController } from './signon.controller';
import { SignonService } from './signon.service';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [SignonController],
  providers: [SignonService],
})
export class SignonModule {}
