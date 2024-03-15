import { Pipe, PipeTransform } from '@angular/core';
import {Player} from "../interfaces/player";

@Pipe({
  name: 'sortByScore',
  standalone: true
})
export class SortByScorePipe implements PipeTransform {

  transform(players: Player[]): Player[] {
    return players.sort((a,b) => b.score - a.score);
  }

}
