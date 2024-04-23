import { Injectable } from "@nestjs/common";
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
}