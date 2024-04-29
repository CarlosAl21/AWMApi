import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { usuarios } from "./usuarios.entity";
import { serviciosUsuarioController} from "./serviciosUsuario.controller";
import { serviciosUsuario } from "./serviciosUsuario.service";
import { LugaresTuristicos } from "./lugaresTuristicos.entity";
import { serviciosLugares } from "./serviciosLugares.service";
import { serviciosLugaresController } from "./serviciosLugares.controller";

@Module({
    imports: [TypeOrmModule.forFeature([usuarios, LugaresTuristicos])],
    controllers: [serviciosUsuarioController, serviciosLugaresController],
    providers: [serviciosUsuario, serviciosLugares]
})
export class Modulos {
    
}