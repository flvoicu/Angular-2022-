import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute} from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/servicio/crud.service';

@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.css']
})
export class EditarEmpleadoComponent implements OnInit {

  formularioEmpleados:FormGroup;
  id:any;

  constructor(
    private activeRoute:ActivatedRoute,
    private crudService:CrudService,
    public formulario:FormBuilder,
    private router: Router
  ) { 
    // recogemos el id de la url y lo guardamos
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    this.crudService.BuscarEmpleadoID(this.id).subscribe(
      respuesta => {
        this.formularioEmpleados.setValue({
          nombre:respuesta[0]['nombre'],
          dni:respuesta[0]['dni'],
          fecha:respuesta[0]['fecha'],
          vacaciones:respuesta[0]['vacaciones']
        });
      }
    );
    this.formularioEmpleados = this.formulario.group(
      {
        nombre:[''],
        dni:[''],
        fecha:[''],
        vacaciones:['']
      }
    );
  }

  ngOnInit(): void {
  }

  enviarDatos():any{
    this.crudService.ActualizarEmpleado(this.id, this.formularioEmpleados.value).subscribe(() => {
      this.router.navigateByUrl('listar-empleados');
    });
  }

}
