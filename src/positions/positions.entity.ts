import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Position extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  playerPosition: string;

  @Column({ unique: true })
  numberPosition: number;
}
