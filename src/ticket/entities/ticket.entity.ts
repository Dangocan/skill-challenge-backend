import { Place } from 'src/place/entities/place.entity';
import { User } from 'src/user/entities/user.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ticketStatusEnum } from '../enum/ticketStatus.enum';

@Entity({ name: 'ticket' })
export class Ticket extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  title: string;

  @Column({ nullable: false })
  name: string;

  @Column({
    type: 'enum',
    enum: ticketStatusEnum,
    default: ticketStatusEnum.PENDENTE,
    nullable: false,
  })
  status: string;

  @CreateDateColumn({ type: 'timestamp', nullable: false })
  createAt: string;

  @UpdateDateColumn({ type: 'timestamp', nullable: false })
  lastModified: string;

  /*@Column()
  inCharge: string;*/

  @ManyToOne(() => Place, (place) => place.ticket)
  place: Place;

  @ManyToOne(() => User, (user) => user.ticketsCreated)
  createdBy: User;
}
