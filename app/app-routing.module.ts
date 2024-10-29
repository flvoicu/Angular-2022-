import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AniadirEmpleadosComponent } from './componentes/aniadir-empleados/aniadir-empleados.component';
import { EditarEmpleadoComponent } from './componentes/editar-empleado/editar-empleado.component';
import { ListarEmpleadosComponent } from './componentes/listar-empleados/listar-empleados.component';
import { PeticionDiasComponent } from './componentes/peticion-dias/peticion-dias.component';


const routes: Routes = [

  // cuando entre en ruta vacia redirecciona a aniadir-empleados
  {path: '', pathMatch: 'full', redirectTo:'listar-empleados'}, 
  // la ruta de listar-empleados se redirecciona al componente
  {path: 'listar-empleados', component:ListarEmpleadosComponent},
  {path: 'aniadir-empleados', component:AniadirEmpleadosComponent},
  {path: 'editar-empleado/:id', component:EditarEmpleadoComponent},
  {path: 'peticion-dias/:id', component:PeticionDiasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
