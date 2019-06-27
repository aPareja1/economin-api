import { Injectable } from '@angular/core';
import {GLOBAL} from './../GLOBALS';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MonedasService {
  url: string = GLOBAL.url;

  constructor(private http: HttpClient) { }
  
  public getUnidades():Observable<any>{
    return this.http.get<any>(this.url);
  }
  public getDetalle(codigo){
    return this.http.get(this.url+'/'+codigo);
  }
}
