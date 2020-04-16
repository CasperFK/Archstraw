import { Body, Controller, Post } from '@nestjs/common';
import { SignonService } from './signon.service';
import { UserModel } from '../users/UserModel';

@Controller('api/sign-on')
export class SignonController {
  constructor( private signon: SignonService) {}

  // @Post()
  // async register(@Body() user: UserModel): Promise<string> {
  //   const odp = await this.signon.createUser(user);
  //   if (odp) {
  //     return 'User has been created.';
  //   }
  // }
}
