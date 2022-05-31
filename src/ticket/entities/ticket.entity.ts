import { Place } from 'src/place/entities/place.entity';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
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

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  createdBy: string;

  @Column({ default: ticketStatusEnum.PENDENTE, nullable: false })
  status: string;

  @CreateDateColumn({ type: 'timestamp', nullable: false })
  createAt: string;

  @UpdateDateColumn({ type: 'timestamp', nullable: false })
  lastModified: string;

  @Column({ nullable: false })
  inCharge: string;

  @ManyToOne(() => Place, (place) => place.ticket)
  place: Place;

  @BeforeInsert()
  @BeforeUpdate()
  titleMaking() {
    this.title = `${this.id} ${this.title}`;
  }
}
