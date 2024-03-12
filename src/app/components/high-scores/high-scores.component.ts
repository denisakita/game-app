import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterLinkWithHref} from "@angular/router";

@Component({
  selector: 'app-high-scores',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref,],
  templateUrl: './high-scores.component.html',
  styleUrl: './high-scores.component.css'
})
export class HighScoresComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }

}
