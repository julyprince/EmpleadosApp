import { Component, OnInit } from '@angular/core';
import { Empleado } from './empleado.model';
import { EmpledosService } from './empleados.service';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Lista de Empleados';
  constructor(private miServicio:ServicioEmpleadosService, private empleadosServicio:EmpledosService){
    //this.empleados=this.empleadosServicio.empleados;
  }
  ngOnInit(): void {
    this.empleados=this.empleadosServicio.empleados;
  }

  /**empleados:Empleado[]=[

    new Empleado("juan", "diaz", "presidente", 9000),
    new Empleado("roberto", "gonzales", "director", 7000),
    new Empleado("martha", "perez", "jefa", 5000),
    new Empleado("adrian", "condori", "administrativo", 4000),
  ];**/
  empleados:Empleado[]=[];

  agregarEmpleado(){
    let miEmpledado=new Empleado(this.cuadroNombre, this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);
    //this.miServicio.muestraMensaje("nombre del empleado: "+ miEmpledado.nombre);
    this.empleadosServicio.agregarEmpleadoServicio(miEmpledado);
    //this.empleados.push(miEmpledado);
    
  }
  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;
}
