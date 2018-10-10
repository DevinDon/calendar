import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations'
import { YearService } from './year.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('default', [
      state('appear', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      transition(':enter, :leave', [
        animate('200ms ease-in')
      ])
    ])
  ]
})
export class AppComponent {

  title = '万年历';
  subtitle = '副标题';
  detail = '内容';

  constructor(
    public service: YearService
  ) { }

}
