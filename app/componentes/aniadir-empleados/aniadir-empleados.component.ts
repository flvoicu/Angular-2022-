import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { CrudService } from 'src/app/servicio/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aniadir-empleados',
  templateUrl: './aniadir-empleados.component.html',
  styleUrls: ['./aniadir-empleados.component.css']
})
export class AniadirEmpleadosComponent implements OnInit {
  
  constructor(
    private crudService: CrudService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }
  
  // recoge los datos del input cada vez que se cambia
  onFileChange(event: any) {
    //recoge el archivo
    const file = event.target.files[0];
    // funcion async para poder leer el archivo
    const promise = new Promise((resolve) => {
      const reader = new FileReader();
      // gestiona la info dentro del archivo
      reader.onload = function (fileLoadedEvent: any) {
        const textFromFileLoaded = fileLoadedEvent.target.result;
        resolve(fileLoadedEvent.target.result);
      }
      // le da formatp
      reader.readAsText(file, "UTF-8");
    });

    // recoge los datos del fichero y permite usarlos
    promise.then(file => {
      const data:any = file;
      // se parsea a json
      const json = JSON.parse(data);
      // crea empleado
      this.crudService.AgregarEmpleado(json).subscribe();
      // redireccion
      this.router.navigateByUrl('listar-empleados');
    });
  }

}
