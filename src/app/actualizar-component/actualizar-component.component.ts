import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpledosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-actualizar-component',
  templateUrl: './actualizar-component.component.html',
  styleUrls: ['./actualizar-component.component.css']
})
export class ActualizarComponentComponent implements OnInit {

  constructor(private router:Router, private route:ActivatedRoute, private miServicio:ServicioEmpleadosService, private empleadosServicio:EmpledosService) { }
  empleados:Empleado[]=[];

  ngOnInit(): void {
    this.empleados=this.empleadosServicio.empleados;
    this.indice=this.route.snapshot.params['id'];
    let empleado:Empleado=this.empleadosServicio.encontrarEmpleado(this.indice);
    this.cuadroNombre=empleado.nombre;
    this.cuadroApellido=empleado.apellido;
    this.cuadroCargo=empleado.cargo;
    this.cuadroSalario=empleado.salario;
  }
  volverHome() {
    this.router.navigate(['']);
   }
   actualizaEmpleado(){
    let miEmpledado=new Empleado(this.cuadroNombre, this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);
    //this.miServicio.muestraMensaje("nombre del empleado: "+ miEmpledado.nombre);
    this.empleadosServicio.actualizarEmpleado(this.indice, miEmpledado);
    //this.empleados.push(miEmpledado);
    this.router.navigate(['']);
    }
  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;
  indice :number=0;
}
