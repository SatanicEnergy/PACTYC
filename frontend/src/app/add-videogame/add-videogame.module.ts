import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddVideogamePageRoutingModule } from './add-videogame-routing.module';

import { AddVideogamePage } from './add-videogame.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddVideogamePageRoutingModule
  ],
  declarations: [AddVideogamePage]
})
export class AddVideogamePageModule {}
