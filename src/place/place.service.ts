import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindAllByRelationshipOptionsDto } from 'src/global-dtos/find-all-by-relationship-options.dto';
import { Ticket } from 'src/ticket/entities/ticket.entity';
import { User } from 'src/user/entities/user.entity';
import { FindConditions, FindOneOptions, Repository } from 'typeorm';
import { CreatePlaceDto } from './dto/create-place.dto';
import { UpdatePlaceDto } from './dto/update-place.dto';
import { Place } from './entities/place.entity';

@Injectable()
export class PlaceService {
  constructor(
    @InjectRepository(Place)
    private readonly placeRepository: Repository<Place>,
    @InjectRepository(Ticket)
    private readonly ticketRepository: Repository<Ticket>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  async create(createPlaceDto: CreatePlaceDto) {
    const place = this.placeRepository.create(createPlaceDto);
    this.placeRepository.create(place);
    return await this.placeRepository.save(place);
  }

  async findAll() {
    return await this.placeRepository.find();
  }

  async findAllByRelationship(options: FindAllByRelationshipOptionsDto) {
    try {
      return await this.placeRepository.find({
        relations: options.relations,
        where: options.where,
      });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async findOne(
    conditions: FindConditions<Place>,
    options?: FindOneOptions<Place>,
  ) {
    try {
      return await this.placeRepository.findOneOrFail(conditions, options);
    } catch (error) {
      throw new NotFoundException();
    }
  }

  async update(id: string, updatePlaceDto: UpdatePlaceDto, userId: string) {
    const place = await this.placeRepository.findOne({ id });

    const createdBy = await this.userRepository.findOne({
      id: userId,
    });

    this.placeRepository.merge(place, updatePlaceDto);
    await this.placeRepository.save(place);

    const ticketToSave = this.ticketRepository.create({
      title: `${id} ${updatePlaceDto.name || place.name}`,
      createdBy: createdBy,
      place: place,
    });

    await this.ticketRepository.save(ticketToSave);

    return await this.placeRepository.save(place);
  }

  async remove(id: string) {
    await this.placeRepository.findOne({ id });
    return await this.placeRepository.delete(id);
  }
}
