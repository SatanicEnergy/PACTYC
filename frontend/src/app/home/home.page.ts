import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  title: string = "Bienvenido a tu lista de videojuegos personal";

  constructor(private router: Router) {}

  goToMyVideogames() {
    this.router.navigateByUrl("/my-videogames");
  }

}
