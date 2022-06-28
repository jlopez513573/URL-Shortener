import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Url {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  full: string;

  @Column()
  short: string;

  @Column()
  clicks: number;
}
