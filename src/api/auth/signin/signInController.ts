import { Body, Controller, Post } from '@nestjs/common';
import { Users } from '../Users';

@Controller('api/auth')
export class SignInController {
  @Post()
  getUser(@Body() user: {userName: string, password: string}) {
    const {userName, password } = user;
    const statusFalse = false;
    for (const el of Users) {
      if (el.userName === userName && el.password === password) {
        return {
          status: true,
          userName,
        };
      }
    }
    return {
      status: statusFalse,
    };
  }
}
