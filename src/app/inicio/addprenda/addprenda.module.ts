import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddprendaPageRoutingModule } from './addprenda-routing.module';

import { AddprendaPage } from './addprenda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddprendaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddprendaPage]
})
export class AddprendaPageModule {}
