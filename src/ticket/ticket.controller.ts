import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { TicketService } from './ticket.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { AuthGuard } from '@nestjs/passport';
import { FindAllByRelationshipOptionsDto } from '../global-dtos/find-all-by-relationship-options.dto';

@Controller('ticket')
@UseGuards(AuthGuard('jwt'))
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  /*******DESABILITADO
  @Post()
  async create(@Body() createTicketDto: CreateTicketDto, @Request() req: any) {
    return await this.ticketService.create(createTicketDto, req.user.id);
  }*/

  @Get()
  async findAll() {
    return await this.ticketService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.ticketService.findOne({ id });
  }

  @Post('findAllByRelationship')
  async findAllByRelationship(
    @Body() options: FindAllByRelationshipOptionsDto,
  ) {
    return await this.ticketService.findAllByRelationship(options);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateTicketDto: UpdateTicketDto,
  ) {
    return await this.ticketService.update(id, updateTicketDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.ticketService.remove(id);
  }
}
