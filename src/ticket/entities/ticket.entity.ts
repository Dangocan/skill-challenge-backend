import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ticketStatusEnum } from '../enum/ticketStatus.enum';

@Entity({ name: 'ticket' })
export class Ticket {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  title: string;

  @Column({ default: ticketStatusEnum.PENDENTE, nullable: false })
  status: string;

  @CreateDateColumn({ type: 'timestamp', nullable: false })
  createAt: string;

  @UpdateDateColumn({ type: 'timestamp', nullable: false })
  lastModified: string;

  @Column({ nullable: false })
  inCharge: string;
}
