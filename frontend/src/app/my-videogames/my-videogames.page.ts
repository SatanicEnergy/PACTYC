import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-videogames',
  templateUrl: './my-videogames.page.html',
  styleUrls: ['./my-videogames.page.scss'],
})
export class MyVideogamesPage implements OnInit {

  videogames: any = [
    {
      id: 1,
      genre: "terror",
      company: "Ubisoft"
    }, {
      id: 2,
      genre: "accion",
      company: "Bethesda"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
