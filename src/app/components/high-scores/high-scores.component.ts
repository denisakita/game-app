import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterLinkWithHref} from "@angular/router";
import {Observable, of} from "rxjs";
import {ApiService} from "../../services/api.service";
import {OnlineStatusDirective} from "../../directives/online-status.directive";

@Component({
  selector: 'app-high-scores',
  standalone: true,
  imports: [CommonModule, OnlineStatusDirective,RouterLinkWithHref,],
  templateUrl: './high-scores.component.html',
  styleUrl: './high-scores.component.css',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class HighScoresComponent implements OnInit {
  public players$: Observable<Player[] | undefined> = of(undefined)

  constructor(
    private api: ApiService,
  ) {
  }

  ngOnInit() {
    this.players$ = this.api.getAllPlayers$();
  }

}
