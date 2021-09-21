import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewService {

  constructor(private http : HttpClient) { }

  getData(json: string) {
    return this.http.get<any[]>(json);
  }
}
