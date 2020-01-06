import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiEndPoint: string = environment.apiEndPoint;
  apiHeaderOptions: object = environment.apiHeaderOptions;
  constructor(private http: HttpClient) { }

  fetchCategories() {

    return this.http.get(`${this.apiEndPoint}/categories`,
                          this.apiHeaderOptions );
  }

  fetchJokesByCategory(category: string) {

    return this.http.get(`${this.apiEndPoint}/random?category=${category}`,
                          this.apiHeaderOptions);

  }
}
