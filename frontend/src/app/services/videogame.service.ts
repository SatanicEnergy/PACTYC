import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Videogame } from '../interfaces/videogame';

@Injectable({
  providedIn: 'root'
})
export class VideogameService {

  endpoint = 'http://localhost:8080/videogames';

  constructor(private httpClient: HttpClient) { }

  createVideogame(Videogame: Videogame) {
    return this.httpClient.post<Videogame>(this.endpoint,Videogame, {params: {
      title: Videogame.title,
      genre: Videogame.genre,
      company: Videogame.company
    }});
  }

  getVideogames() {
    return this.httpClient.get(this.endpoint);
  }

  deleteVideogame(videogame: Videogame) {
    return this.httpClient.delete(this.endpoint + '/' + videogame.id).subscribe(response => {});
  }

  editVideogame(videogame: Videogame) {
    return this.httpClient.put(this.endpoint + '/' + videogame.id, videogame, {params: {
      title: videogame.title,
      genre: videogame.genre,
      company: videogame.company
    }});
  }
}
