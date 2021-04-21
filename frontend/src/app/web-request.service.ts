import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  readonly ROOT_URL: any;

  constructor(private http: HttpClient ) { 
    this.ROOT_URL = 'http://localhost:3000';
  }

  get(url: string){
    return this.http.get(`${this.ROOT_URL}/${url}`);
  }

  post(url: string, payload: Object){
    return this.http.post(`${this.ROOT_URL}/${url}`, payload);
  }

  patch(url: string, payload: Object){
    return this.http.patch(`${this.ROOT_URL}/${url}`, payload);
  }

  delete(url: string){
    return this.http.delete(`${this.ROOT_URL}/${url}`);
  }

}