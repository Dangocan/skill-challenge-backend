import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { FindConditions, FindOneOptions, Repository } from 'typeorm';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { FindAllByRelationshipOptionsDto } from './dto/find-all-by-relationship-options.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { Ticket } from './entities/ticket.entity';

@Injectable()
export class TicketService {
  constructor(
    @InjectRepository(Ticket)
    private readonly ticketRepository: Repository<Ticket>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  async create(createTicketDto: CreateTicketDto, userId: string) {
    const userCreator = await this.userRepository.findOne({ id: userId });
    const ticket = this.ticketRepository.create(createTicketDto);

    ticket.createdBy = userCreator;

    await this.ticketRepository.save(ticket);

    const ticketWithId = await this.ticketRepository.findOne({ id: ticket.id });
    ticketWithId.title = `${ticketWithId.id} ${ticketWithId.name}`;

    return await this.ticketRepository.save(ticketWithId);
  }

  async findAll() {
    return await this.ticketRepository.find();
  }

  async findOne(
    conditions: FindConditions<Ticket>,
    options?: FindOneOptions<Ticket>,
  ) {
    try {
      return await this.ticketRepository.findOneOrFail(conditions, options);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async findAllByRelationship(options: FindAllByRelationshipOptionsDto) {
    try {
      return await this.ticketRepository.find({
        relations: options.relations,
        where: options.where,
      });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async update(id: string, updateTicketDto: UpdateTicketDto) {
    const ticket = await this.findOne({ id });
    this.ticketRepository.merge(ticket, updateTicketDto);
    return await this.ticketRepository.save(ticket);
  }

  async remove(id: string) {
    await this.ticketRepository.findOne({ id });
    return await this.ticketRepository.delete(id);
  }
}
