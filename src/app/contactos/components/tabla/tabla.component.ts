import { Component, OnInit } from '@angular/core';
import { TablaContactos } from '../../interface/tabla-contactos.interface';

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

  ELEMENT_DATA: TablaContactos[] = [
    {nombre: 'AbcAbc', apellido: 'Hydrogen', telefono: 1.0079, empresa: 'H'},
    {nombre: 'AbcAbc', apellido: 'Helium', telefono: 4.0026, empresa: 'He'},
    {nombre: 'AbcAbc', apellido: 'Lithium', telefono: 6.941, empresa: 'Li'},
    {nombre: 'AbcAbc', apellido: 'Beryllium', telefono: 9.0122, empresa: 'Be'},
    {nombre: 'AbcAbc', apellido: 'Boron', telefono: 10.811, empresa: 'B'},
    {nombre: 'AbcAbc', apellido: 'Carbon', telefono: 12.0107, empresa: 'C'},
    {nombre: 'AbcAbc', apellido: 'Nitrogen', telefono: 14.0067, empresa: 'N'},
    {nombre: 'AbcAbc', apellido: 'Oxygen', telefono: 15.9994, empresa: 'O'},
    {nombre: 'AbcAbc', apellido: 'Fluorine', telefono: 18.9984, empresa: 'F'},
    {nombre: 'AbcAbc', apellido: 'Neon', telefono: 20.1797, empresa: 'Ne'},
  ];

  displayedColumns: string[] = ['nombre', 'apellido', 'telefono', 'empresa'];
  dataSource = this.ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
