import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages/pages.component';
import { CreditsComponent } from './credits/credits.component';
import { MenuComponent } from './menu/menu.component';
import { AppComponent } from './app.component';
@NgModule({
  declarations: [AppComponent, PagesComponent, CreditsComponent, MenuComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
