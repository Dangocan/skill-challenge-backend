import { IsIn, IsNotEmpty, IsOptional } from 'class-validator';
import { ticketStatusEnum } from '../enum/ticketStatus.enum';

export class CreateTicketDto {
  @IsNotEmpty()
  title: string;

  @IsOptional()
  @IsIn(Object.values(ticketStatusEnum))
  status: string;

  @IsNotEmpty()
  name: string;
}
