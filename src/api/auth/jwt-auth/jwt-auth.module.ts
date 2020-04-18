import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../constants';
import { JwtStrategy } from './jwt.strategy';
import { JwtAuthService } from './jwt-auth.service';
import { UsersModule } from '../../users/users.module';
import { JwtRefreshAuthModule } from '../jwt-refresh-auth/jwt-refresh-auth.module';

@Module({
  imports: [
    UsersModule,
    JwtRefreshAuthModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: {expiresIn: '600s'},
    }),
  ],
  providers: [
    JwtStrategy,
    JwtAuthService,
  ],
  exports: [JwtStrategy, JwtAuthService],
})
export class JwtAuthModule {}
