import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Modulos
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

@NgModule({
  //Se quitaron todas esas declaraciones por que las encapsulamos en un modulo
  declarations: [
    AppComponent,
    /* LoginComponent,
    RegisterComponent, */
    NopagefoundComponent

    /* BreadcrumbsComponent,
    SidebarComponent,
    HeaderComponent     */

    /* DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent */
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
