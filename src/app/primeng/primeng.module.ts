import { NgModule } from '@angular/core';

import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import {MenuModule} from 'primeng/menu';
import {StyleClassModule} from 'primeng/styleclass';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [],
  exports: [
    TableModule,
    InputTextModule,
    MenuModule,
    StyleClassModule,
    ButtonModule
  ]
})
export class PrimengModule { }
