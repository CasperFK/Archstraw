import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(email: string, pass: string): Promise<any> {
    // console.log("user");
    const user = await this.usersService.findOne(email);

    if (!user) {
      return {
        error: true,
        log: {email: false},
      };
    }
    if (user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return {
      error: true,
      log: { password: false },
    };
  }
}
