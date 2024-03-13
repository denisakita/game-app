import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LeaderboardsComponent} from "./leaderboards.component";
import {OnlineStatusDirective} from "../../directives/online-status.directive";
import {SortByGemCountPipe} from "../../pipes/sort-by-gem-count.pipe";
import {LeaderboardsRoutingModule} from "./leaderboards-routing.module";


@NgModule({
  declarations: [
    LeaderboardsComponent,

  ],
  imports: [
    CommonModule,
    LeaderboardsRoutingModule,
    OnlineStatusDirective,
    SortByGemCountPipe
  ]
})
export class LeaderboardsModule {
}
