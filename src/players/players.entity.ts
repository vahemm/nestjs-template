import { BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';

export class Player extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
