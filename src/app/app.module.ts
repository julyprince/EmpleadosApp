import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpleadoHijoCComponent } from './empleado-hijo-c/empleado-hijo-c.component';
import { CaracteristicasempleadoCComponent } from './caracteristicasempleado-c/caracteristicasempleado-c.component';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { EmpledosService } from './empleados.service';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProyectosComponentsComponent } from './proyectos-components/proyectos-components.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ContactoComponentComponent } from './contacto-component/contacto-component.component';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarComponentComponent } from './actualizar-component/actualizar-component.component';
import { ErrorPersonalizadoComponent } from './error-personalizado/error-personalizado.component';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';

const appRoutes:Routes=[
  {path:'', component:HomeComponentComponent},
  {path:'proyectos', component:ProyectosComponentsComponent},
  {path:'quienes', component:QuienesSomosComponent },
  {path:'contacto', component:ContactoComponentComponent},
  {path:'quienes', component:QuienesSomosComponent},
  {path:'actualiza/:id', component:ActualizarComponentComponent},
  {path:'**',component:ErrorPersonalizadoComponent}
]
;
@NgModule({
  declarations: [
    AppComponent,
    EmpleadoHijoCComponent,
    CaracteristicasempleadoCComponent,
    HomeComponentComponent,
    ProyectosComponentsComponent,
    QuienesSomosComponent,
    ContactoComponentComponent,
    ActualizarComponentComponent,
    ErrorPersonalizadoComponent
  ],
  imports: [
    BrowserModule, FormsModule, 
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [ServicioEmpleadosService, 
    EmpledosService, 
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
