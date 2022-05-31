import { InCharge } from 'src/in-charge/entities/in-charge.entity';
import { Place } from 'src/place/entities/place.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'company' })
export class Company {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  cnpj: string;

  @Column()
  description: string;

  @ManyToOne(() => User, (user) => user.companies)
  user: User;

  @OneToMany(() => InCharge, (inCharge) => inCharge.company)
  inCharge: InCharge[];

  @OneToMany(() => Place, (place) => place.company)
  places: Place[];
}
