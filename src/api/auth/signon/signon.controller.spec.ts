import { Test, TestingModule } from '@nestjs/testing';
import { SignOnController } from './signOnController';

describe('Signon Controller', () => {
  let controller: SignOnController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SignOnController],
    }).compile();

    controller = module.get<SignOnController>(SignOnController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
