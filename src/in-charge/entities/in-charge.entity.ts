import { Company } from 'src/company/entities/company.entity';
import { Place } from 'src/place/entities/place.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'in-charge' })
export class InCharge {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  address: string;

  @Column({ name: 'phone-number', nullable: false })
  phoneNumber: string;

  @ManyToOne(() => Company, (company) => company.inCharge)
  company: Company;

  @ManyToOne(() => Place, (place) => place.inCharge)
  placeInCharge: Place;
}
