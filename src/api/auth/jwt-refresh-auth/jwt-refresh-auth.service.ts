import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

interface Payload {
  username: string;
  role: string;
  time: string;
}

@Injectable()
export class JwtRefreshAuthService {
  private refreshTokens: string[] = [];
  private payload: Payload;
  private jwtAuthService;

  constructor(
    private jwtService: JwtService,
  ) {
  }

  public async createRefreshToken(payload: Payload, payloadUserToken: Payload, jwtService): Promise<string> {
    this.payload = payloadUserToken;
    this.jwtAuthService = jwtService;
    const token = await this.jwtService.sign(payload);
    this.refreshTokens.push(token);
    return token;
  }

  public async getRefreshToken(authorization): Promise<string | void> {
    const token: string = authorization.split(' ')[1];
    if (!token) {
      const answear = {
        statusCode: 401,
        error: 'Unauthorized',
        log: 'Wrong Refresh Token',
      };
      throw new UnauthorizedException(answear);
    }
    if (!this.refreshTokens.includes(token)) {
      const answear = {
        statusCode: 403,
        error: 'Unauthorized',
        log: 'This Token is not exist!',
      };
      throw new UnauthorizedException(answear);
    }
    try {
      await this.jwtService.verify(token);
      return await this.jwtAuthService.createToken(this.payload);
    } catch (e) {
      throw new Error(e);
    }
  }
}
