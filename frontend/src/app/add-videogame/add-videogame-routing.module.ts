import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddVideogamePage } from './add-videogame.page';

const routes: Routes = [
  {
    path: '',
    component: AddVideogamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddVideogamePageRoutingModule {}
