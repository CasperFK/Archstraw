import { Injectable } from '@nestjs/common';
import { UsersService } from '../../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { JwtRefreshAuthService } from '../jwt-refresh-auth/jwt-refresh-auth.service';

@Injectable()
export class JwtAuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private jwtRefreshAuthService: JwtRefreshAuthService,
  ) {
  }

  public validateUser(user, pass): any {
    if (!user) {
      return {
        error: true,
        log: 'email',
      };
    }
    if (user.password === pass) {
      const { firstName, lastName, email, ...result } = user;
      return { firstName, lastName, email };
    }
    return {
      error: true,
      log: 'password',
    };
  }

  public async login(user: any) {
    const payload = { username: user.username, role: 'admin', time: new Date().toString() };
    const payloadRefreshToken = {username: user.username, role: 'refreshToken', time: new Date().toString()};
    return {
      access_token: this.createToken(payload),
      refresh_token: await this.jwtRefreshAuthService.createRefreshToken(payloadRefreshToken, payload, this),
    };
  }
  public createToken(payload) {
    return this.jwtService.sign(payload);
  }
}
