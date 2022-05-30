import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindConditions, FindOneOptions, Repository } from 'typeorm';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { Ticket } from './entities/ticket.entity';

@Injectable()
export class TicketService {
  constructor(
    @InjectRepository(Ticket)
    private readonly ticketRepository: Repository<Ticket>,
  ) {}
  async create(createTicketDto: CreateTicketDto) {
    const company = this.ticketRepository.create(createTicketDto);

    return await this.ticketRepository.save(company);
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
