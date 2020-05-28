import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { JwtAuthService } from './jwt-auth.service';
import { UsersModule } from '../../users/users.module';
import { JwtRefreshAuthModule } from '../jwt-refresh-auth/jwt-refresh-auth.module';
import { config } from 'dotenv';
import { ConfigService } from '@nestjs/config';
config();

@Module({
  imports: [
    UsersModule,
    JwtRefreshAuthModule,
    JwtModule.register({
      secret: process.env.SECRET_KEY_FOR_NEW_TOKEN,
      signOptions: {expiresIn: '600s'},
    }),
  ],
  providers: [
    JwtStrategy,
    JwtAuthService,
    ConfigService
  ],
  exports: [JwtStrategy, JwtAuthService],
})
export class JwtAuthModule {}
