import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByScore',
  standalone: true
})
export class SortByScorePipe implements PipeTransform {

  transform(players: Player[]): Player[] {
    return players.sort((a,b) => b.sore - a.score);
  }

}
