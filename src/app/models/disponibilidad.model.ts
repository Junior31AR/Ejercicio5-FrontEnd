import { Time } from "@angular/common";
import { Ciclo } from "./ciclo.model";
import { Usuario } from "./usuario";

export class Disponibilidad {

    idDisponibilidad?:number;
    horaInicio?:Time;
    horaFin?:Time;
    dia?:string;
    ciclo?:Ciclo;
    usuario?:Usuario;

}
