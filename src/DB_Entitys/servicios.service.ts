import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { usuarios } from "./usuarios.entity";
import { Repository } from "typeorm";
import { createUsuarioDto } from "./dtos/create-usuario.dto";

@Injectable()
export class servicios {
    constructor(@InjectRepository(usuarios) private readonly usuriosRepository: Repository<usuarios>) {
        console.log('Servicios cargados');
    }
    async create(dto: createUsuarioDto){
        const usurio = this.usuriosRepository.create(dto);

        return await this.usuriosRepository.save(usurio);
    }

    findMany(){
        return this.usuriosRepository.find();
    }

    async findOne(id: number){
        const usuario = await this.usuriosRepository.findOne({where: {ID_Usuario: id}});
        if (!usuario) {
            throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
        }
        return usuario;
    }

    async update(id: number, dto: createUsuarioDto){
        const usuario= await this.usuriosRepository.findOne({where: {ID_Usuario: id}});

        Object.assign(usuario, dto);

        return await this.usuriosRepository.save(usuario);
    }
    
    async delete(id: number){
        const usuario= await this.usuriosRepository.findOne({where: {ID_Usuario: id}});
        return await this.usuriosRepository.remove(usuario);
    }
}