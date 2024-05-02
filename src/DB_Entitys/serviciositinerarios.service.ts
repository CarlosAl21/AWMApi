import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Itinerarios } from './itinerarios.entity';
import { usuarios } from './usuarios.entity';
import { LugaresTuristicos } from './lugaresTuristicos.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ItinerariosService {
  constructor(
    @InjectRepository(Itinerarios)
    private itinerariosRepository: Repository<Itinerarios>,
    @InjectRepository(usuarios)
    private usuariosRepository: Repository<usuarios>,
    @InjectRepository(LugaresTuristicos)
    private lugaresTuristicosRepository: Repository<LugaresTuristicos>,
  ) {}

  async findAll(): Promise<Itinerarios[]> {
    return this.itinerariosRepository.find({ relations: ['usuario', 'lugaresTuristicos'] });
  }

  async findById(id: number): Promise<Itinerarios> {
    return this.itinerariosRepository.findOne({ where: { id }, relations: ['usuario', 'lugaresTuristicos'] });
  }

  async create(userId: number, itinerario: Itinerarios): Promise<Itinerarios> {
    const usuario = await this.usuariosRepository.findOne({ where: { ID_Usuario: userId } });
    itinerario.usuario = usuario;
    return this.itinerariosRepository.save(itinerario);
  }

  async update(id: number, itinerario: Itinerarios): Promise<Itinerarios> {
    await this.itinerariosRepository.update(id, itinerario);
    return this.itinerariosRepository.findOne({ where: { id }, relations: ['usuario', 'lugaresTuristicos'] });
  }

  async delete(id: number): Promise<void> {
    await this.itinerariosRepository.delete(id);
  }

  async addLugarTuristico(itinerarioId: number, lugarTuristicoId: number): Promise<Itinerarios> {
    const itinerario = await this.itinerariosRepository.findOne({ where: { id: itinerarioId }, relations: ['lugaresTuristicos'] });
    const lugarTuristico = await this.lugaresTuristicosRepository.findOne({ where: { ID_Lugar: lugarTuristicoId } });
    itinerario.lugaresTuristicos.push(lugarTuristico);
    return this.itinerariosRepository.save(itinerario);
  }

  async removeLugarTuristico(itinerarioId: number, lugarTuristicoId: number): Promise<Itinerarios> {
    const itinerario = await this.itinerariosRepository.findOne({ where: { id: itinerarioId }, relations: ['lugaresTuristicos'] });
    itinerario.lugaresTuristicos = itinerario.lugaresTuristicos.filter((lugar) => lugar.ID_Lugar !== lugarTuristicoId);
    return this.itinerariosRepository.save(itinerario);
  }
}