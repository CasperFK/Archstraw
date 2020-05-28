import { Module } from '@nestjs/common';
import { JwtRefreshAuthService } from './jwt-refresh-auth.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '../jwt-auth/jwt.strategy';
import { config } from 'dotenv';
import { ConfigService } from '@nestjs/config';
config();

@Module({
  imports: [
    JwtModule.register({
    secret: process.env.SECRET_KEY_FOR_REFRESH_TOKEN,
    }),
  ],
  providers: [JwtRefreshAuthService, JwtStrategy, ConfigService],
  exports: [JwtRefreshAuthService, JwtStrategy],
})
export class JwtRefreshAuthModule {}
