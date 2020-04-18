import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtAuthService } from './jwt-auth/jwt-auth.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService,
              private jwtAuthService: JwtAuthService) {
  }

  async validateUser(mail: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(mail);

    return this.jwtAuthService.validateUser(user, pass);
  }

  async login(user: any) {
    return this.jwtAuthService.login(user);
  }
}
