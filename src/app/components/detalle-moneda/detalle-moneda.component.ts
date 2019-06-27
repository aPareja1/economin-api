import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { MonedasService } from 'src/app/services/monedas.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-detalle-moneda',
  templateUrl: './detalle-moneda.component.html',
  styleUrls: ['./detalle-moneda.component.css']
})
export class DetalleMonedaComponent implements OnInit {
  
  data: any[];  
  Player = [];  
  Run = [];  
  Linechart;  
  meses = [] ;
  valor=[];
  serie:any={};
  
  constructor(private ds :DataService, private ms: MonedasService) { }
  moneda : any;
  ngOnInit() {

    this.ds.divisaActual.subscribe(moneda => {
      this.moneda=moneda;
      this.meses=[];
      this.valor=[];
      if(moneda){
        this.ms.getDetalle(moneda.codigo).subscribe(
          res =>{
            this.serie = res;
            this.serie = this.serie.serie;
            this.serie.forEach(element => {
              this.meses.push(element.fecha);
              this.valor.push(element.valor);
              
            });
            if (this.Linechart) this.Linechart.destroy();      
            this.Linechart = new Chart('canvas', {  
              type: 'line',  
              data: {  
                labels: this.meses,  
        
                datasets: [  
                  {  
                    data: this.valor,  
                    borderColor: '#3cb371',  
                    backgroundColor: "#0000FF",  
                  }  
                ]  
              },  
              options: {  
                legend: {  
                  display: false  
                },  
                scales: {  
                  xAxes: [{  
                    display: true,
                    type:'time',
                    time:{
                      displayFormats:{
                        day: 'MMM D'
                      }
                    }
                  }],  
                  yAxes: [{  
                    display: true  
                  }],  
                }  
              }  
            });  
           
          }
        );
      
      };
        
    });


     
  }
}