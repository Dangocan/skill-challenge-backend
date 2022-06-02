import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { hashSync } from 'bcrypt';
import { Company } from 'src/company/entities/company.entity';
import { Ticket } from 'src/ticket/entities/ticket.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  email: string;

  @Column()
  name: string;

  @Column()
  password: string;

  @CreateDateColumn({ name: 'created-at', type: 'timestamp', nullable: false })
  createAt: string;

  @UpdateDateColumn({ name: 'updated-at', type: 'timestamp', nullable: false })
  updatedAt: string;

  @OneToMany(() => Company, (company) => company.user)
  companies: Company[];

  @OneToMany(() => Ticket, (ticket) => ticket.createdBy)
  ticketsCreated: Ticket[];

  @OneToMany(() => Ticket, (ticket) => ticket.userInCharge)
  ticketsToResolve: Ticket[];

  @BeforeInsert()
  hashPassword() {
    this.password = hashSync(this.password, 10);
  }
}
