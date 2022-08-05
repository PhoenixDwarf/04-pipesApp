import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Personalized module
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

// Cambiar el locale de la app
import localeEsCO from '@angular/common/locales/es-CO';
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common'

registerLocaleData(localeEsCO);
registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    VentasModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-CO' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
