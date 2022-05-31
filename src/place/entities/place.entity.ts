import { Company } from 'src/company/entities/company.entity';
import { InCharge } from 'src/in-charge/entities/in-charge.entity';
import { Ticket } from 'src/ticket/entities/ticket.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'place' })
export class Place {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  address: string;

  @ManyToOne(() => Company, (company) => company.places)
  company: Company;

  @OneToMany(() => InCharge, (inCharge) => inCharge.placeInCharge)
  inCharge: InCharge[];

  @OneToMany(() => Ticket, (ticket) => ticket.place)
  ticket: Ticket[];
}
