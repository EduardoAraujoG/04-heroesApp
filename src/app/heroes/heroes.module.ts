import { NgModule } from '@angular/core';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroesRoutingModule } from './heroes-routing.module';



@NgModule({
  declarations: [
    AgregarComponent,
    ListadoComponent,
    HeroeComponent,
    HomeComponent,
    BuscarComponent
  ],
  imports: [
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
