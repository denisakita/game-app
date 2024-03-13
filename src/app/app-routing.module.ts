import {ActivatedRouteSnapshot, RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {PreloadingService} from "./services/preloading.service";


const routes: Routes = [
  {
    path: 'profile/:id',
    loadComponent: () => import('./pages/profile/profile.component').then(m => m.ProfileComponent),
    title: (route:ActivatedRouteSnapshot) =>`Finder | Profile for ${route.paramMap.get('id')}`,
  },
  {
    path: 'players',
    loadComponent: () => import('./pages/players/players.component').then(m => m.PlayersModule),
    title: 'Finder | All Players',
    data: {preload: true}
  },
  {
    path: 'leaderboards',
    loadComponent: () => import('./pages/leaderboards/leaderboards.component').then(m => m.LeaderboardsModule),
    title: 'Finder | LeaderBoards',
  },
  {
    path: 'messages',
    loadComponent: () => import('./pages/messages/messages.component').then(m => m.MessageComponent),
    title: 'Finder | Messages',
    data: {preload: true}
  },
  {
    path: '',
    redirectTo: '/players',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/players'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadingService}),
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
