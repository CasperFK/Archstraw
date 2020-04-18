import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtAuthModule } from './jwt-auth/jwt-auth.module';
import { JwtRefreshAuthModule } from './jwt-refresh-auth/jwt-refresh-auth.module';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtAuthModule,
    JwtRefreshAuthModule],
  providers: [AuthService, LocalStrategy],
  exports: [AuthService],
})
export class AuthModule {
}
