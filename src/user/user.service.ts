import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindConditions, FindOneOptions, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(newUser: CreateUserDto) {
    const user = this.userRepository.create(newUser);
    return await this.userRepository.save(user);
  }

  async findAll() {
    return await this.userRepository.find({ select: ['id', 'name', 'email'] });
  }

  async findOne(
    conditions: FindConditions<User>,
    options?: FindOneOptions<User>,
  ) {
    try {
      return await this.userRepository.findOneOrFail(conditions, options);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async update(id: string, updatedUser: UpdateUserDto) {
    const user = await this.findOne({ id });
    this.userRepository.merge(user, updatedUser);
    return await this.userRepository.save(user);
  }

  async remove(id: string) {
    await this.userRepository.findOne({ id });
    return await this.userRepository.delete(id);
  }
}
