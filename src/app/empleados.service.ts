import { Injectable } from "@angular/core";
import { DataService } from "./data.service";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";

@Injectable()
export class EmpledosService {

    constructor(private servicioVentanaEmergente:  ServicioEmpleadosService,
      private dataService:DataService){}
    empleados:Empleado[]=[

        /*new Empleado("juan", "diaz", "presidente", 9000),
        new Empleado("roberto", "gonzales", "director", 7000),
        new Empleado("martha", "perez", "jefa", 5000),
        new Empleado("adrian", "condori", "administrativo", 4000),
    */];

    setEmpleados(misEmpleados:Empleado[]){
      this.empleados=misEmpleados;
    }

      obtenerEmpleados(){
        return this.dataService.cargarEmpleados();
      }

      agregarEmpleadoServicio(empleado:Empleado){
        this.servicioVentanaEmergente.muestraMensaje("persona que va agregar: " + "\n" +
        empleado.nombre + " " + empleado.apellido);
        this.empleados.push(empleado);
        this.dataService.guardarEmpleados(this.empleados);
      }

      encontrarEmpleado(indice:number){
        let empleado:Empleado =this.empleados[indice];
        return empleado;
      }

      actualizarEmpleado(indice:number, empleado:Empleado){
        let empleadoModificado:Empleado =this.empleados[indice];
        empleadoModificado.nombre=empleado.nombre;
        empleadoModificado.apellido=empleado.apellido;
        empleadoModificado.cargo=empleado.cargo;
        empleadoModificado.salario=empleado.salario;
        this.dataService.actualizarEmpleado(indice,empleado);
      }

      eliminarEmpleado(indice:number){
        this.empleados.splice(indice,1);
        this.dataService.eliminarEmpleado(indice);
        this.dataService.guardarEmpleados(this.empleados);
       // delete(this.empleados[indice]) ;
      }
}


