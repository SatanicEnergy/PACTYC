import { Component, OnInit } from '@angular/core';
import { VideogameService } from '../services/videogame.service';

@Component({
  selector: 'app-my-videogames',
  templateUrl: './my-videogames.page.html',
  styleUrls: ['./my-videogames.page.scss'],
})
export class MyVideogamesPage implements OnInit {

  videogames: any = [];

  constructor(private videogameService: VideogameService) { }

  ngOnInit() {
    this.getAllVideogames();
  }

  getAllVideogames() {
    this.videogameService.getVideogames().subscribe(response => {
      console.log("response guapa");
      console.log(response);
      this.videogames = response;
    });
  }

}
