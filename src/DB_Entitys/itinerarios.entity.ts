import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { usuarios } from './usuarios.entity';
import { LugaresTuristicos } from './lugaresTuristicos.entity';

@Entity()
export class Itinerarios {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fechaCreacion: Date;

  @ManyToOne(() => usuarios, (usuario) => usuario.ID_Usuario)
  usuario: usuarios;

  @ManyToMany(() => LugaresTuristicos)
  @JoinTable()
  lugaresTuristicos: LugaresTuristicos[];
}