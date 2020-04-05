import { Module } from '@nestjs/common';
import { SignOnController } from './signOnController';

@Module({
  controllers: [SignOnController],
})
export class SignonModule {}
