import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InCharge } from './entities/in-charge.entity';
import { InChargeService } from './in-charge.service';

describe('InChargeService', () => {
  let service: InChargeService;
  let repository: Repository<InCharge>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        InChargeService,
        { provide: getRepositoryToken(InCharge), useValue: {} },
      ],
    }).compile();

    service = module.get<InChargeService>(InChargeService);
    repository = module.get<Repository<InCharge>>(getRepositoryToken(InCharge));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(repository).toBeDefined();
  });
});
