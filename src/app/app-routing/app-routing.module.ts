import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { MenuComponent } from '../menu/menu.component';
import { CreditsComponent } from '../credits/credits.component';
import { HappyprinceComponent } from '../happyprince/happyprince.component';
import { HomeComponent } from '../home/home.component';
import { PagesComponent } from '../pages/pages.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'credits', component: CreditsComponent },
  { path: 'happy', component: HappyprinceComponent },
  { path: 'page', component: PagesComponent },
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
