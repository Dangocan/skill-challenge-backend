import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Place } from './entities/place.entity';
import { PlaceService } from './place.service';

describe('PlaceService', () => {
  let service: PlaceService;
  let repository: Repository<Place>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PlaceService,
        { provide: getRepositoryToken(Place), useValue: {} },
      ],
    }).compile();

    service = module.get<PlaceService>(PlaceService);
    repository = module.get<Repository<Place>>(getRepositoryToken(Place));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(repository).toBeDefined();
  });
});
