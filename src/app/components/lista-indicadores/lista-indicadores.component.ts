import { Component, OnInit } from '@angular/core';
import {MonedasService} from './../../services/monedas.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-lista-indicadores',
  templateUrl: './lista-indicadores.component.html',
  styleUrls: ['./lista-indicadores.component.css']
})
export class ListaIndicadoresComponent implements OnInit {

  constructor(private ms: MonedasService,private ds: DataService) { }
  listaUnidades: Array<any> = new Array;
  divisaSeleccionada: any;
  ngOnInit() {
    this.ms.getUnidades().subscribe(m=>{
      delete m.autor;
      delete m.fecha;
      delete m.version;
      var temp=[];
      Object.keys(m).forEach(function(key){
      console.table('Key : ' + key + ', value: ' + m[key]  );
        temp.push(m[key]);        
       })
       this.listaUnidades=temp;
      console.log(m);
    });
    this.ds.divisaActual.subscribe(divisa => this.divisaSeleccionada=divisa);
  }

  seleccionarDivisa(divisa){
    this.ds.cambiarDivisa(divisa);
   

  }

}
