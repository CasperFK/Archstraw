import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { LocalAuthGuard } from '../auth/local-auth-guard';
import { AuthService } from '../auth/auth.service';
import { JwtAuthGuard } from '../auth/jwt-auth/jwt-auth.guard';
import { JwtRefreshAuthGuard } from '../auth/jwt-refresh-auth/jwt-refresh-auth.guard';
import { JwtRefreshAuthService } from '../auth/jwt-refresh-auth/jwt-refresh-auth.service';

@Controller('/api/sign-in')
export class SigninController {
  constructor(
    private userService: UsersService,
    private authService: AuthService,
    private jwtRefreshAuthService: JwtRefreshAuthService,
    ) {}

  @UseGuards(LocalAuthGuard)
  @Post()
  async login(@Body() body, @Request() req) {
    return this.authService.login(body);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @UseGuards(JwtRefreshAuthGuard)
  @Get('token')
  async getRefreshToken(@Request() req) {
    return await this.jwtRefreshAuthService.getRefreshToken(req.headers.authorization);
  }
}
