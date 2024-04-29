import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { serviciosLugares } from './serviciosLugares.service';
import { LugaresTuristicos } from './lugaresTuristicos.entity';

@Controller('servicioLugar')
export class serviciosLugaresController {
  constructor(private lugarTuristicoService: serviciosLugares) {}

  @Get()
  async findAll(): Promise<LugaresTuristicos[]> {
    return this.lugarTuristicoService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<LugaresTuristicos> {
    return this.lugarTuristicoService.findById(id);
  }

  @Post()
  async create(@Body() lugarTuristico: LugaresTuristicos): Promise<LugaresTuristicos> {
    return this.lugarTuristicoService.create(lugarTuristico);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() lugarTuristico: LugaresTuristicos): Promise<LugaresTuristicos> {
    return this.lugarTuristicoService.update(id, lugarTuristico);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.lugarTuristicoService.delete(id);
  }
}