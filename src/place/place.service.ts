import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindConditions, FindOneOptions, Repository } from 'typeorm';
import { CreatePlaceDto } from './dto/create-place.dto';
import { UpdatePlaceDto } from './dto/update-place.dto';
import { Place } from './entities/place.entity';

@Injectable()
export class PlaceService {
  constructor(
    @InjectRepository(Place)
    private readonly placeRepository: Repository<Place>,
  ) {}
  async create(createPlaceDto: CreatePlaceDto) {
    const company = this.placeRepository.create(createPlaceDto);
    return this.placeRepository.create(company);
  }

  async findAll() {
    return await this.placeRepository.find();
  }

  async findOne(
    conditions: FindConditions<Place>,
    options?: FindOneOptions<Place>,
  ) {
    try {
      return await this.findOne(conditions, options);
    } catch (error) {
      throw new NotFoundException();
    }
  }

  async update(id: string, updatePlaceDto: UpdatePlaceDto) {
    const place = await this.findOne({ id });
    this.placeRepository.merge(place, updatePlaceDto);
    return await this.placeRepository.save(place);
  }

  async remove(id: string) {
    await this.placeRepository.findOne({ id });
    return await this.placeRepository.delete(id);
  }
}
