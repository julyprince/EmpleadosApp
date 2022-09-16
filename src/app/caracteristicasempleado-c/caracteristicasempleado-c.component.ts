import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-caracteristicasempleado-c',
  templateUrl: './caracteristicasempleado-c.component.html',
  styleUrls: ['./caracteristicasempleado-c.component.css']
})
export class CaracteristicasempleadoCComponent implements OnInit {

  @Output() caracteristicasempleado =new EventEmitter<string>();
  constructor(private miServicio:ServicioEmpleadosService) { }

  ngOnInit(): void {
  }
  agregaCaracteristicas(value:string) {
    this.miServicio.muestraMensaje(value)
    this.caracteristicasempleado.emit(value);
  }
}
