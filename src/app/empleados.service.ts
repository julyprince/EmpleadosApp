import { Empleado } from "./empleado.model";

export class EmpledosService {
    empleados:Empleado[]=[

        new Empleado("juan", "diaz", "presidente", 9000),
        new Empleado("roberto", "gonzales", "director", 7000),
        new Empleado("martha", "perez", "jefa", 5000),
        new Empleado("adrian", "condori", "administrativo", 4000),
      ];

      agregarEmpleadoServicio(empleado:Empleado){
        this.empleados.push(empleado);
      }
}