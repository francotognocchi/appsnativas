import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddprendaPage } from './addprenda.page';

const routes: Routes = [
  {
    path: '',
    component: AddprendaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddprendaPageRoutingModule {}
