import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'my-videogames',
    loadChildren: () => import('./my-videogames/my-videogames.module').then( m => m.MyVideogamesPageModule)
  },  {
    path: 'add-videogame',
    loadChildren: () => import('./add-videogame/add-videogame.module').then( m => m.AddVideogamePageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
