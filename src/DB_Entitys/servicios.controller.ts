import { Body, Controller, Post } from '@nestjs/common';
import { servicios } from './servicios.service';
import { createUsuarioDto } from './dtos/create-usuario.dto';

@Controller('servicios')
export class serviciosContoller {
    constructor(private readonly servicios: servicios) { }

    @Post()
    create(@Body() dto: createUsuarioDto) {
        return this.servicios.create(dto);
    }

}