import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { serviciosUsuario } from './serviciosUsuario.service';
import { createUsuarioDto } from './dtos/create-usuario.dto';

@Controller('servicioUsuario')
export class serviciosUsuarioController {
    constructor(private readonly servicios: serviciosUsuario) { }

    @Post()
    create(@Body() dto: createUsuarioDto) {
        return this.servicios.create(dto);
    }

    @Get()
    findMany() {
        return this.servicios.findMany();
    }

    @Get(':id')
    async findOne(@Param('id') id:number) {
        return this.servicios.findOne(id);
    }

    @Get('email/:email')
  async findByEmail(@Param('email') email: string) {
    try {
      return this.servicios.findByEmail(email);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

    @Put(':id')
    update(@Param('id') id:number, @Body() dto: createUsuarioDto) {
        return this.servicios.update(id,dto);
    }

    @Delete(':id')
    delete(@Param('id') id:number) {
        return this.servicios.delete(id);
    }
}