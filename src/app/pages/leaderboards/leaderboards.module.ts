import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {HighScoresComponent} from '../../components/high-scores/high-scores.component';
import {MostGemsComponent} from '../../components/most-gems/most-gems.component';
import {OnlineStatusDirective} from '../../directives/online-status.directive';
import {LeaderboardsRoutingModule} from './leaderboards-routing.module';
import {LeaderboardsComponent} from './leaderboards.component';
import {SortByGemCountPipe} from "../../pipes/sort-by-gem-count.pipe";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    LeaderboardsComponent,
    MostGemsComponent
  ],
  imports: [
    CommonModule,
    HighScoresComponent,
    LeaderboardsRoutingModule,
    OnlineStatusDirective,
    SortByGemCountPipe,
  ]
})
export class LeaderboardsModule {
}
