import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { EmpledosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  title = 'Lista de Empleados';
  constructor(private miServicio:ServicioEmpleadosService, private empleadosServicio:EmpledosService) { }

  ngOnInit(): void {
    this.empleados=this.empleadosServicio.empleados;
  }

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
