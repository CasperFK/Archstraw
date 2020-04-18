import { ExecutionContext, Injectable } from '@nestjs/common';
import { CanActivate } from '@nestjs/common';
import { Observable, of } from 'rxjs';

@Injectable()
export class JwtRefreshAuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    if (request.headers.authorization) { return of(true); }
    return of(false);
  }
}
