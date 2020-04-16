import { Test, TestingModule } from '@nestjs/testing';
import { SignonService } from './signon.service';

describe('SignonService', () => {
  let service: SignonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SignonService],
    }).compile();

    service = module.get<SignonService>(SignonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
