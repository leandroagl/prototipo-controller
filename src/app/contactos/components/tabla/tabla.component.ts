import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Contacto } from '../../interface/contacto.interface';
import { ContactosService } from '../../services/contactos-service.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styles: [`
    table {
  width: 50%;
  margin-top: 20px;
}

.example-table-container {
  position: relative;
  min-height: 200px;
  max-height: 600px;
  overflow: auto;
  `]
})
export class TablaComponent implements OnInit {

  contactos: Contacto[] = [];
  displayedColumns: string[] = ['nombre', 'apellido', 'telefono', 'empresa'];

  contacto = new MatTableDataSource(this.contactos)

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
