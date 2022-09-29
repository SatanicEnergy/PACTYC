import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VideogameService {

  endpoint = 'http://localhost:8080/api/videogames';

  constructor(private httpClient: HttpClient) { }

  getVideogames() {
    return this.httpClient.get(this.endpoint);
  }
}
