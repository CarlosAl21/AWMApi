import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { usuarios } from "./usuarios.entity";
import { serviciosUsuarioController} from "./serviciosUsuario.controller";
import { serviciosUsuario } from "./serviciosUsuario.service";
import { LugaresTuristicos } from "./lugaresTuristicos.entity";
import { serviciosLugares } from "./serviciosLugares.service";
import { serviciosLugaresController } from "./serviciosLugares.controller";
import { Itinerarios } from "./itinerarios.entity";
import { ItinerariosController } from "./serviciositinerarios.controller";
import { ItinerariosService } from "./serviciositinerarios.service";

@Module({
    imports: [TypeOrmModule.forFeature([usuarios, LugaresTuristicos, Itinerarios])],
    controllers: [serviciosUsuarioController, serviciosLugaresController, ItinerariosController ],
    providers: [serviciosUsuario, serviciosLugares, ItinerariosService ]
})
export class Modulos {
    
}