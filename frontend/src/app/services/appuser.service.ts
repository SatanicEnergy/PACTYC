import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppuserService {

  endPoint: string = "http://localhost8080/appuser";

  constructor(private httpClient: HttpClient) { }

  getAllAppUsers() {
    return this.httpClient.get(this.endPoint);

  }
}
