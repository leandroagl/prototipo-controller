import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contacto, Empresa } from '../../interface/contacto.interface';
import { Empresas } from '../../interface/empresas';
import { ContactosService } from '../../services/contactos-service.service';
import { switchMap } from 'rxjs/operators'


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',

})
export class AgregarComponent implements OnInit {

  empresas = [
    {
      id: 'AlfaroAbogados',
      desc: 'Alfaro Abogados'
    },
    {
      id: 'FondationForge',
      desc: 'Fondation Forge'
    },
  ]

  contacto: Contacto = {
    nombre: '',
    apellido: '',
    telefono: null,
    empresa: Empresa.SYLS,
  }

  constructor(
    private contactoService: ContactosService,
    private activatedRoute : ActivatedRoute,
    private router         : Router) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .subscribe(({id}) => console.log(id))
  }

  guardar() {
    if(this.contacto.nombre.trim().length === 0){
      return;
    }

    this.contactoService.addContacto(this.contacto)
      .subscribe(contacto => console.log(contacto));
    this.router.navigate(['contactos'])


  }
}
