import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'usuarios'})
export class usuarios {
    @PrimaryGeneratedColumn()
    ID_Usuario: number;

    @Column()
    Nombre: string;

    @Column()
    Correo_electronico: string;
    
    @Column()
    Contraseña: string;
}