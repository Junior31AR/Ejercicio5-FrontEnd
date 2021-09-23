import { Component, OnInit } from '@angular/core';
import { Ciclo } from 'src/app/models/ciclo.model';
import { Disponibilidad } from 'src/app/models/disponibilidad.model';
import { Usuario } from 'src/app/models/usuario';
import { CicloService } from 'src/app/services/ciclo.service';
import { DisponibilidadService } from 'src/app/services/disponibilidad.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-add-disponibilidad',
  templateUrl: './add-disponibilidad.component.html',
  styleUrls: ['./add-disponibilidad.component.css']
})
export class AddDisponibilidadComponent implements OnInit {

  lstCiclos:Ciclo[] = [];

  lstUsuarios:Usuario[]=[];

  disponibilidad: Disponibilidad = {

    ciclo:{
      idCiclo:0,
      
    },
    usuario:{
      idUsuario:0,
     
    }
  }

  constructor(private cicloService:CicloService,private usuarioService:UsuarioService,
    private disponibilidadService:DisponibilidadService) {
    this.cicloService.listaCiclo().subscribe(
      ciclos => {
        this.lstCiclos = ciclos;
      }
    )
    this.usuarioService.listaUsuarios().subscribe(
      usuarios => {
        this.lstUsuarios = usuarios;
      }
    );
  }

  registra(){
    console.log(this.disponibilidad);
    console.log("ingresó a registrar");

    this.disponibilidadService.registraDisponibilidad(this.disponibilidad).subscribe(
      response => {
        console.log(response.mensaje);
        alert(response.mensaje)
      },
      error => {
        console.log(error);
      },
    );
  }

  ngOnInit(): void {
  }

}
