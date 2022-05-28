import { Test, TestingModule } from '@nestjs/testing';
import { InChargeController } from './in-charge.controller';
import { InChargeService } from './in-charge.service';

describe('InChargeController', () => {
  let controller: InChargeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InChargeController],
      providers: [InChargeService],
    }).compile();

    controller = module.get<InChargeController>(InChargeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
