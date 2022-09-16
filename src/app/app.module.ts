import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpleadoHijoCComponent } from './empleado-hijo-c/empleado-hijo-c.component';
import { CaracteristicasempleadoCComponent } from './caracteristicasempleado-c/caracteristicasempleado-c.component';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { EmpledosService } from './empleados.service';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoHijoCComponent,
    CaracteristicasempleadoCComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [ServicioEmpleadosService, EmpledosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
