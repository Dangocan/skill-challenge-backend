import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindConditions, FindOneOptions, Repository } from 'typeorm';
import { CreateInChargeDto } from './dto/create-in-charge.dto';
import { UpdateInChargeDto } from './dto/update-in-charge.dto';
import { InCharge } from './entities/in-charge.entity';

@Injectable()
export class InChargeService {
  constructor(
    @InjectRepository(InCharge)
    private readonly inChargeRepository: Repository<InCharge>,
  ) {}
  async create(createInChargeDto: CreateInChargeDto) {
    const company = this.inChargeRepository.create(createInChargeDto);
    return this.inChargeRepository.create(company);
  }

  async findAll() {
    return await this.inChargeRepository.find();
  }

  async findOne(
    conditions: FindConditions<InCharge>,
    options?: FindOneOptions<InCharge>,
  ) {
    try {
      return await this.findOne(conditions, options);
    } catch (error) {
      throw new NotFoundException();
    }
  }

  async update(id: string, updateInChargeDto: UpdateInChargeDto) {
    const place = await this.findOne({ id });
    this.inChargeRepository.merge(place, updateInChargeDto);
    return await this.inChargeRepository.save(place);
  }

  async remove(id: string) {
    await this.inChargeRepository.findOne({ id });
    return await this.inChargeRepository.delete(id);
  }
}
