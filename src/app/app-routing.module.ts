import { Routes } from '@angular/router';
import { Juego } from './arcade-list/arcade-list.component';
import { AboutComponent } from './about-component/about-component';
import { DashboardComponent } from './dashboard-component/dashboard-component'
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'Home',
    pathMatch: "full"
  },

   {
     path: 'Home',
     component: DashboardComponent
     },

  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '**',
    redirectTo: 'Home'
  }
];
