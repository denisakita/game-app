import {Component} from '@angular/core';
import {MessageService} from './services/message.service';
import {environment} from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public appFooter = environment.appFooter;

  constructor(
    public messageService: MessageService
  ) {
  }
}
