import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages/pages.component';
import { CreditsComponent } from './credits/credits.component';
import { MenuComponent } from './menu/menu.component';
import { AppComponent } from './app.component';
import { HappyprinceComponent } from './happyprince/happyprince.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [AppComponent, PagesComponent, CreditsComponent, MenuComponent, HappyprinceComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
