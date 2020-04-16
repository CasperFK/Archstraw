import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
 constructor(private authService: AuthService) {
   super();
 }

 async validate(username: string, password: string): Promise<any> {
   const user = await this.authService.validateUser(username, password );
   if (user.error) {
     const answear = {
       statusCode: 401,
       error: 'Unauthorized',
       log: user.log,
     };
     throw new UnauthorizedException(answear);
   }
   return user;
 }
}
