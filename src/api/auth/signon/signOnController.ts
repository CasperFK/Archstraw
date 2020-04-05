import { Body, Controller, Post } from '@nestjs/common';
import { SignonService } from './signon.service';
import { UserModel } from '../../users/UserModel';

@Controller('api/auth/sign-on')
export class SignOnController {
  constructor( private signon: SignonService) {}

  // @Post()
  // async register(@Body() user: UserModel): Promise<string> {
  //   const odp = await this.signon.createUser(user);
  //   if (odp) {
  //     return 'User has been created.';
  //   }
  // }
}
