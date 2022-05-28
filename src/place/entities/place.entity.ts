import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'place' })
export class Place {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  address: string;
}
