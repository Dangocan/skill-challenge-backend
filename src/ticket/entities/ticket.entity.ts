import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { companyStatusEnum } from '../enum/companyStatus.enum';

@Entity({ name: 'ticket' })
export class Ticket {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ nullable: false })
  title: string;

  @Column({ default: companyStatusEnum.PENDENTE, nullable: false })
  status: string;

  @Column({ type: 'datetime', nullable: false })
  createAt: string;

  @Column({ type: 'datetime', nullable: false })
  lastModified: string;

  @Column({ nullable: false })
  inCharge: string;
}
