import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HabitacionesComponent } from './components/habitaciones/habitaciones.component';
import { CafeteriaComponent } from './components/cafeteria/cafeteria.component';
import { ActividadesPromocionesComponent } from './components/actividades-promociones/actividades-promociones.component';
import { UbicacionComponent } from './components/ubicacion/ubicacion.component';
import { TestimoniosComponent } from './components/testimonios/testimonios.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    HabitacionesComponent,
    CafeteriaComponent,
    ActividadesPromocionesComponent,
    UbicacionComponent,
    TestimoniosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
