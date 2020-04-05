import { Body, Controller, Get } from '@nestjs/common';
import { SigninService } from './signin.service';
import { UserModel } from '../../users/UserModel';

interface LoginAnswear {
  status: string;
  data: {
    firstName: string;
    lastName: string;
    role: string;
  };
}
@Controller('/api/auth/sign-in')
export class SignInController {
  constructor(private signin: SigninService) {}
  @Get()
  async login(@Body() user: UserModel): Promise<LoginAnswear> {
    const odp = await this.signin.findOne(user);
    return {
      status: 'ok',
      data: {
        firstName: odp.firstName,
        lastName: odp.lastName,
        role: 'admin',
      },
    };
  }
}
