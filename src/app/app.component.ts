import { Component } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lista de Empleados';
  constructor(private miServicio:ServicioEmpleadosService){

  }

  empleados:Empleado[]=[

    new Empleado("juan", "diaz", "presidente", 9000),
    new Empleado("roberto", "gonzales", "director", 7000),
    new Empleado("martha", "perez", "jefa", 5000),
    new Empleado("adrian", "condori", "administrativo", 4000),
  ];

  agregarEmpleado(){
    let miEmpledado=new Empleado(this.cuadroNombre, this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);
    this.miServicio.muestraMensaje("nombre del empleado: "+ miEmpledado.nombre);
    this.empleados.push(miEmpledado);
    
  }
  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;
}
