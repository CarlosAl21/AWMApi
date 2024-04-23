import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { servicios } from './servicios.service';
import { createUsuarioDto } from './dtos/create-usuario.dto';

@Controller('servicios')
export class serviciosContoller {
    constructor(private readonly servicios: servicios) { }

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

    @Put(':id')
    update(@Param('id') id:number, @Body() dto: createUsuarioDto) {
        return this.servicios.update(id,dto);
    }

    @Delete(':id')
    delete(@Param('id') id:number) {
        return this.servicios.delete(id);
    }
}