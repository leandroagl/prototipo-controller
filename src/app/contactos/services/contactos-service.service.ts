import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Contacto } from '../interface/contacto.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  private baseUrl: string = environment.baseUrl

  constructor(private http: HttpClient) { }

  getContactos(): Observable<Contacto[]> {
    return this.http.get<Contacto[]>(`${this.baseUrl}/contactos`)
  }
}
