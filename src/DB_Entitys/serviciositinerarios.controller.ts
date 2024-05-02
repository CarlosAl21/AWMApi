import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { Itinerarios } from './itinerarios.entity';
import { ItinerariosService } from './serviciositinerarios.service';

@Controller('itinerarios')
export class ItinerariosController {
  constructor(private itinerariosService: ItinerariosService) {}

  @Get()
  async findAll(): Promise<Itinerarios[]> {
    return this.itinerariosService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<Itinerarios> {
    return this.itinerariosService.findById(id);
  }

  @Post(':userId')
  async create(@Param('userId') userId: number, @Body() itinerario: Itinerarios): Promise<Itinerarios> {
    return this.itinerariosService.create(userId, itinerario);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() itinerario: Itinerarios): Promise<Itinerarios> {
    return this.itinerariosService.update(id, itinerario);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.itinerariosService.delete(id); 
  }

  @Post(':itinerarioId/lugares/:lugarTuristicoId')
  async addLugarTuristico(@Param('itinerarioId') itinerarioId: number, @Param('lugarTuristicoId') lugarTuristicoId: number): Promise<Itinerarios> {
    return this.itinerariosService.addLugarTuristico(itinerarioId, lugarTuristicoId);
  }

  @Delete(':itinerarioId/lugares/:lugarTuristicoId')
  async removeLugarTuristico(@Param('itinerarioId') itinerarioId: number, @Param('lugarTuristicoId') lugarTuristicoId: number): Promise<Itinerarios> {
    return this.itinerariosService.removeLugarTuristico(itinerarioId, lugarTuristicoId);
  }
}