import { Body, Controller, Post } from '@nestjs/common';
import { Users } from '../Users';

@Controller('/api/auth/sign-in')
export class SignInController {
  @Post()
  getUser(@Body() user: {login: string, password: string}) {
    const {login, password } = user;
    const statusFalse = false;
    for (const el of Users) {
      if (el.login === login && el.password === password) {
        return {
          status: true,
          login,
        };
      }
    }
    return {
      status: statusFalse,
    };
  }
}
