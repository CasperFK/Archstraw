import { Module } from '@nestjs/common';
import { JwtRefreshAuthService } from './jwt-refresh-auth.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../constants';
import { JwtStrategy } from '../jwt-auth/jwt.strategy';
import { JwtAuthModule } from '../jwt-auth/jwt-auth.module';
import { JwtAuthService } from '../jwt-auth/jwt-auth.service';
import { UsersService } from '../../users/users.service';

@Module({
  imports: [
    JwtModule.register({
    secret: jwtConstants.refreshToken,
    }),
  ],
  providers: [JwtRefreshAuthService, JwtStrategy],
  exports: [JwtRefreshAuthService, JwtStrategy],
})
export class JwtRefreshAuthModule {}
