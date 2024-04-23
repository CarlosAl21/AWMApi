import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { usuarios } from "./usuarios.entity";
import { serviciosContoller } from "./servicios.controller";
import { servicios } from "./servicios.service";

@Module({
    imports: [TypeOrmModule.forFeature([usuarios])],
    controllers: [serviciosContoller],
    providers: [servicios]
})
export class Modulos {
    
}