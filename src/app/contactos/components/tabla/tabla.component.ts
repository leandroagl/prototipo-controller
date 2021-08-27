import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AgregarComponent } from '../agregar/agregar.component';
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

mat-icon {
  margin-right: 25px;
  cursor: pointer;
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
  displayedColumns: string[] = ['nombre', 'apellido', 'telefono', 'empresa', 'editar-eliminar'];

  editar: boolean = false;

  constructor(
    private _contactoService: ContactosService,
    private dialog          : MatDialog) {
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

  dialogOpen() {
    this.editar = true;
    this.dialog.open(AgregarComponent)

  }

}
