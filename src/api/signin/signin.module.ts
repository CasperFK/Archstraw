import { Module } from '@nestjs/common';
import { SigninController } from './signin.controller';
import { SigninService } from './signin.service';
import { UsersModule } from '../users/users.module';
import { AuthModule } from '../auth/auth.module';
import { JwtRefreshAuthModule } from '../auth/jwt-refresh-auth/jwt-refresh-auth.module';

@Module({
  imports: [UsersModule, AuthModule, JwtRefreshAuthModule],
  controllers: [SigninController],
  providers: [SigninService],
})
export class SigninModule {}
