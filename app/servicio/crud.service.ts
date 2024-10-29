import { Injectable } from '@angular/core';

import { HttpClient, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  API: string = 'http://localhost/empleados/';

  constructor(private clienteHttp: HttpClient) { }

  AgregarEmpleado(datos: any): Observable<any> {

    datos['vacaciones']= this.CalcularVacaciones(datos['fecha']);
    
    // insert=1 ya que la información se envia por post
    return this.clienteHttp.post(this.API + "?insertar=1", datos);
  }

  ObtenerEmpleados() {
    return this.clienteHttp.get(this.API);
  }

  EliminarEmpleado(id: any): Observable<any> {
    return this.clienteHttp.get(this.API + "?borrar=" + id);
  }

  BuscarEmpleadoID(id: any): Observable<any> {
    return this.clienteHttp.get(this.API + "?consultarID=" + id);
  }

  BuscarEmpleadoDNI(dni: any): Observable<any> {
    return this.clienteHttp.get(this.API + "?consultarDNI=" + dni);
  }

  ActualizarEmpleado(id: any, datos: any): Observable<any> {
    return this.clienteHttp.post(this.API + "?actualizar=" + id, datos);
  }

  CalcularVacaciones(fecha:any){
    const dateAhora: Date = new Date();

    // cortamos el string para recoger dia mes y año del formato 13/09/2002 
    const fechaContrato = fecha;
    let dia = fechaContrato.slice(0, 2);
    let mes = fechaContrato.slice(3, 5);
    let anio = fechaContrato.slice(6, 10);

    // creanos la fecha
    const dateContrato: Date = new Date(anio,mes,dia);
    
    // resta las fechas en milisegundos, luego se pasa a dias y se divide entre 30 para saber los meses
    const mesesTrabajados = ((dateAhora.getTime() - dateContrato.getTime())/ (1000*3600*24))/30;

    // hacemos los calculos a razon de 2.5 dias por mes trabajado y lo redondeamos hacia arriba con math.ceil
    const diasVacaciones = Math.ceil(mesesTrabajados *2.5);

    return diasVacaciones;
  }

}
