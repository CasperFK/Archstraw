import { Test, TestingModule } from '@nestjs/testing';
import { JwtRefreshAuthService } from './jwt-refresh-auth.service';

describe('JwtRefreshAuthService', () => {
  let service: JwtRefreshAuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JwtRefreshAuthService],
    }).compile();

    service = module.get<JwtRefreshAuthService>(JwtRefreshAuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
