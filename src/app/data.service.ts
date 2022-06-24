import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http : HttpClient) { 
    
  }
  getData() :Observable<any> {
      return this._http.get<any[]>('http://localhost:4201/api/interview/magic')
  }
}
