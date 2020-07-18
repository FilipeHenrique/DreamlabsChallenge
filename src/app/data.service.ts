import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './posts.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = "https://jsonplaceholder.typicode.com/posts";
  constructor(private _http: HttpClient) { }

  getPosts() {
    return this._http.get<Post[]>(this.apiUrl);
  }
}
