import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindConditions, FindOneOptions, Repository } from 'typeorm';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { Company } from './entities/company.entity';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private readonly companyRepository: Repository<Company>,
  ) {}
  async create(createCompanyDto: CreateCompanyDto) {
    const company = this.companyRepository.create(createCompanyDto);
    return this.companyRepository.create(company);
  }

  async findAll() {
    return await this.companyRepository.find();
  }

  async findOne(
    conditions: FindConditions<Company>,
    options?: FindOneOptions<Company>,
  ) {
    try {
      return await this.findOne(conditions, options);
    } catch (error) {
      throw new NotFoundException();
    }
  }

  async update(id: string, updateCompanyDto: UpdateCompanyDto) {
    const place = await this.findOne({ id });
    this.companyRepository.merge(place, updateCompanyDto);
    return await this.companyRepository.save(place);
  }

  async remove(id: string) {
    await this.companyRepository.findOne({ id });
    return await this.companyRepository.delete(id);
  }
}
