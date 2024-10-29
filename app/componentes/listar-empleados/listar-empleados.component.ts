import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/servicio/crud.service';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-listar-empleados',
  templateUrl: './listar-empleados.component.html',
  styleUrls: ['./listar-empleados.component.css']
})
export class ListarEmpleadosComponent implements OnInit {

  Empleados: any;
  formDNI: FormGroup

  constructor(
    private crudService: CrudService,
    private formulario: FormBuilder
  ) {
    this.formDNI = this.formulario.group(
      {
        buscar: ['']
      }
    );
  }

  ngOnInit(): void {
    this.crudService.ObtenerEmpleados().subscribe(respuesta => {
      this.Empleados = respuesta;
    });
  }

  borrarEmpleado(id: any, iControl: any) {
    this.crudService.EliminarEmpleado(id).subscribe();
    // elimina la primera fila con el index de iControl
    this.Empleados.splice(iControl, 1);
  }

  BuscarDNI() {
    console.log(this.formDNI.value);
    if (this.formDNI.value != '') {
      this.crudService.BuscarEmpleadoDNI(this.formDNI.value['buscar']).subscribe(respuesta => {
        this.Empleados = respuesta;
      });
    } else {
      this.crudService.ObtenerEmpleados().subscribe(respuesta => {
        this.Empleados = respuesta;
      });
    }
  }

}
