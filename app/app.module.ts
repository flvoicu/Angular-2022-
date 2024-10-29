import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ListarEmpleadosComponent } from './componentes/listar-empleados/listar-empleados.component';
import { AniadirEmpleadosComponent } from './componentes/aniadir-empleados/aniadir-empleados.component';
import { EditarEmpleadoComponent } from './componentes/editar-empleado/editar-empleado.component';
import { PeticionDiasComponent } from './componentes/peticion-dias/peticion-dias.component';


// para procesar la info del form
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// para trabajar con la app / bbdd (peticiones http)
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AniadirEmpleadosComponent,
    EditarEmpleadoComponent,
    ListarEmpleadosComponent,
    PeticionDiasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  // para importarlos en el resto del proyecto
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
