import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('remains')
export class Remain {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  image_url: string;

  @Column()
  title: string;

  @Column()
  country: string;

  @Column()
  state: string;

  @Column()
  city: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column()
  goTo: string;

  @Column('int')
  stars: number;

  // host_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
