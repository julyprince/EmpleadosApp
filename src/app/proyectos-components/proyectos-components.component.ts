import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpledosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-proyectos-components',
  templateUrl: './proyectos-components.component.html',
  styleUrls: ['./proyectos-components.component.css']
})
export class ProyectosComponentsComponent implements OnInit {

  constructor(private router:Router, private miServicio:ServicioEmpleadosService, private empleadosServicio:EmpledosService) { }

  empleados:Empleado[]=[];
  ngOnInit(): void {
    this.empleados=this.empleadosServicio.empleados;
  }
 volverHome() {
  this.router.navigate(['']);
 }
 agregarEmpleado(){
  let miEmpledado=new Empleado(this.cuadroNombre, this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);
  //this.miServicio.muestraMensaje("nombre del empleado: "+ miEmpledado.nombre);
  this.empleadosServicio.agregarEmpleadoServicio(miEmpledado);
  //this.empleados.push(miEmpledado);
  this.router.navigate(['']);
  
}
cuadroNombre:string="";
cuadroApellido:string="";
cuadroCargo:string="";
cuadroSalario:number=0;
}
