import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LugaresTuristicos } from './lugaresTuristicos.entity';
import { Repository } from "typeorm";

@Injectable()
export class serviciosLugares {
    constructor(
        @InjectRepository(LugaresTuristicos)
        private lugarTuristicoRepository: Repository <LugaresTuristicos>,
      ) {}
  async findAll(): Promise<LugaresTuristicos[]> {
    return this.lugarTuristicoRepository.find();
  }

  async findById(id: number): Promise<LugaresTuristicos> {
    return this.lugarTuristicoRepository.findOne({where: {ID_Lugar: id}});
  }

  async create(lugarTuristico: LugaresTuristicos): Promise<LugaresTuristicos> {
    return this.lugarTuristicoRepository.save(lugarTuristico);
  }

  async update(id: number, lugarTuristico: LugaresTuristicos): Promise<LugaresTuristicos> {
    await this.lugarTuristicoRepository.update(id, lugarTuristico);
    return this.lugarTuristicoRepository.findOne({where: {ID_Lugar: id}});
  }

  async delete(id: number): Promise<void> {
    await this.lugarTuristicoRepository.delete(id);
  }
}