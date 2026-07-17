import { Routes } from '@angular/router';
import { GameListComponent } from './game-list-component/game-list-component';
import { LeaderBoardComponent } from './leader-board-component/leader-board-component';
import { AboutComponent } from './about-component/about-component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'games',
    pathMatch: "full"
  },
  {
    path: 'games',
    component: GameListComponent
  },
  {
    path: 'leaderboard',
    component: LeaderBoardComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '**',
    redirectTo: 'games'
  }
];
