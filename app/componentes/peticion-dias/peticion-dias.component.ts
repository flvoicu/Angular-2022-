import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/servicio/crud.service';

@Component({
  selector: 'app-peticion-dias',
  templateUrl: './peticion-dias.component.html',
  styleUrls: ['./peticion-dias.component.css']
})
export class PeticionDiasComponent implements OnInit {

  formVacaciones:FormGroup;
  id:any;
  vacaciones:any;

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
        this.vacaciones = respuesta[0]['vacaciones'];
        this.formVacaciones.setValue({
        nombre:respuesta[0]['nombre'],
        dni:respuesta[0]['dni'],
        fecha:respuesta[0]['fecha'],
        vacaciones:respuesta[0]['vacaciones']
      });
     }
    );
    this.formVacaciones = this.formulario.group(
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
    console.log(this.vacaciones);
    console.log(this.formVacaciones.value['vacaciones']);
    if(parseInt(this.vacaciones)>= parseInt(this.formVacaciones.value['vacaciones'])){
      this.formVacaciones.value['vacaciones']=(parseInt(this.vacaciones)-parseInt(this.formVacaciones.value['vacaciones'])).toString();
      this.crudService.ActualizarEmpleado(this.id, this.formVacaciones.value).subscribe(() => {
        this.router.navigateByUrl('listar-empleados');
      });
    }else{
      alert('No tienes tantos dias de vacaciones')
    }
  }

}
