import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { async } from 'rxjs';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Contacto } from '../interface/contacto.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  private baseUrl: string = environment.baseUrl

  constructor(private http: HttpClient) { }

  getContactos(): Observable<Contacto[]>{
    return this.http.get<Contacto[]>(`${this.baseUrl}/contactos`);
  }

  addContacto( contacto: Contacto): Observable<Contacto> {
    return this.http.post<Contacto>(`${this.baseUrl}/contactos`, contacto);
  }
}
