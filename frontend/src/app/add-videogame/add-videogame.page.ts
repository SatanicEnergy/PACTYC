import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { VideogameService } from '../services/videogame.service';
import { Videogame } from '../interfaces/videogame';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-videogame',
  templateUrl: './add-videogame.page.html',
  styleUrls: ['./add-videogame.page.scss'],
})
export class AddVideogamePage implements OnInit {

  titleInput: string;
  companyInput: string;
  genreInput: string;

  constructor(public navCtrl: NavController, private videogameService: VideogameService, private router: Router) { }

  ngOnInit() {
  }

  addVideogame(){
    if (this.titleInput == null || this.companyInput == null || this.genreInput == null) {
      return false;
    }
    let videogame: Videogame = {
      title: this.titleInput,
      genre: this.genreInput,
      company: this.companyInput
    }
    this.videogameService.createVideogame(videogame).subscribe(response => {
      videogame = response;
    }); 
    
  }

  goBack() {
    this.router.navigateByUrl("/my-videogames");
  }

}
