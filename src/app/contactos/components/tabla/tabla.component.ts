import { Component, OnInit } from '@angular/core';
import { Contacto } from '../../interface/contacto.interface';
import { ContactosService } from '../../services/contactos-service.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styles: [`
    table {
  width: 50%;
}
  `]
})
export class TablaComponent implements OnInit {

  contactos: Contacto[] = [];
  displayedColumns: string[] = ['nombre', 'apellido', 'telefono', 'empresa'];

  constructor(private _contactoService: ContactosService) {
  }

  ngOnInit(): void {
    this.getContactos()
  }

  getContactos() {
    this._contactoService.getContactos()
    .subscribe(resp => {
      this.contactos = resp;
    })
  }

}
