import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Api {
  URL = 'http://localhost:5085'
  constructor(private http: HttpClient) {

  }
  getData(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
  get(path: string){
    return this.http.get(this.URL + path);
  }
}
