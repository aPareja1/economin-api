import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private dataSource = new BehaviorSubject(null);
  divisaActual= this.dataSource.asObservable();

  constructor() { }

  cambiarDivisa(divisa:any){
    this.dataSource.next(divisa);
  }
}
