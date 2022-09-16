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
  
  constructor(private miServicio:ServicioEmpleadosService, private empleadosServicio:EmpledosService){
    //this.empleados=this.empleadosServicio.empleados;
  }
  ngOnInit(): void {
    
  }

  /**empleados:Empleado[]=[

    new Empleado("juan", "diaz", "presidente", 9000),
    new Empleado("roberto", "gonzales", "director", 7000),
    new Empleado("martha", "perez", "jefa", 5000),
    new Empleado("adrian", "condori", "administrativo", 4000),
  ];**/
  
}
