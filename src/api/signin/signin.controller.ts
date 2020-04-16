import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { UserModel } from '../users/UserModel';
import { UsersService } from '../users/users.service';
import { AuthGuard } from '@nestjs/passport';

interface LoginAnswear {
  status: string;
  data: {
    firstName: string;
    lastName: string;
    role: string;
  };
}
@Controller('/api/sign-in')
export class SigninController {
  constructor(private userService: UsersService) {}
  // @Get()
  // async login(@Body() user: UserModel): Promise<any> {
  //   const odp = await this.userService.findOne(user.email);
  //   if (odp && odp.password === user.password) {
  //     return {
  //       status: 'ok',
  //       data: {
  //         firstName: odp.firstName,
  //         lastName: odp.lastName,
  //         role: 'admin',
  //       },
  //     };
  //   } else {
  //     return 'Taki użytkownik nie isnieje';
  //   }
  // }

  @UseGuards(AuthGuard('local'))
  @Post()
  async login2(@Body() req) {
    return req;
  }
}
