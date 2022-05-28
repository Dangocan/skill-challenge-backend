import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
