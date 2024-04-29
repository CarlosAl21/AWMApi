import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class LugaresTuristicos {
  @PrimaryGeneratedColumn()
  ID_Lugar: number;

  @Column()
  Nombre: string;

  @Column()
  Descripcion: string;

  @Column()
  Ubicacion: string;

  @Column()
  Horarios: string;

  @Column('decimal', { precision: 10, scale: 2 })
  Precios: number;

  @Column()
  Categoria: string;

  @Column()
  Imagen: string;
}
