import {Component} from '@angular/core';
import {environment} from "../environments/environment";
import {MessageService} from "./services/message.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'game-app';
  public appFooter: string = environment.appFooter;

  constructor(
    public messageService:MessageService
  ) {
  }
}
