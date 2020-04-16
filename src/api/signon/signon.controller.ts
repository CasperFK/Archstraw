import { Body, Controller, Post } from '@nestjs/common';
import { UserModel } from '../users/UserModel';
import { UsersService } from '../users/users.service';

@Controller('api/sign-on')
export class SignonController {
  // constructor( private userService: UsersService) {}
  //
  // @Post()
  // async register(@Body() user: UserModel): Promise<string> {
  //   const odp = await this.userService.createUser(user);
  //   if (odp) {
  //     return 'User has been created.';
  //   }
  // }
}
