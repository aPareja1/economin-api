import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaIndicadoresComponent } from './components/lista-indicadores/lista-indicadores.component';
import { DetalleMonedaComponent } from './components/detalle-moneda/detalle-moneda.component';
import { MonedasService } from './services/monedas.service'
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    ListaIndicadoresComponent,
    DetalleMonedaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
      ],
  providers: [MonedasService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
