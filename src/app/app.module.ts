import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonajeComponent } from './personaje/personaje.component';
import { BotComponent } from './bot/bot.component';
import { BotImagenComponent } from './bot-imagen/bot-imagen.component';
import { AyudaIconosComponent } from './ayuda-iconos/ayuda-iconos.component';
import { AyudaFaccionesComponent } from './ayuda-facciones/ayuda-facciones.component';
import { ReglasComponent } from './reglas/reglas.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonajeComponent,
    BotComponent,
    BotImagenComponent,
    AyudaIconosComponent,
    AyudaFaccionesComponent,
    ReglasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
