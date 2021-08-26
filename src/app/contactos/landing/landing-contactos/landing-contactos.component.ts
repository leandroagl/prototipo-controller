import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AgregarComponent } from '../../components/agregar/agregar.component';


@Component({
  selector: 'app-landing-contactos',
  templateUrl: './landing-contactos.component.html',

})
export class LandingContactosComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  dialogOpen() {
    this.dialog.open(AgregarComponent)
  }

}
