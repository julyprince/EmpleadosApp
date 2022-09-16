import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";

@Injectable()
export class EmpledosService {

    constructor(private servicioVentanaEmergente:  ServicioEmpleadosService){}
    empleados:Empleado[]=[

        new Empleado("juan", "diaz", "presidente", 9000),
        new Empleado("roberto", "gonzales", "director", 7000),
        new Empleado("martha", "perez", "jefa", 5000),
        new Empleado("adrian", "condori", "administrativo", 4000),
      ];

      agregarEmpleadoServicio(empleado:Empleado){
        this.servicioVentanaEmergente.muestraMensaje("persona que va agregar: " + "\n" +
        empleado.nombre + " " + empleado.apellido);
        this.empleados.push(empleado);
      }
}


