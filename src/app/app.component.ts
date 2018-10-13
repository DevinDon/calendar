import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations'
import { YearService } from './year.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('page', [
      state('header', style({ transform: 'translateY(0)' })),
      state('content', style({ transform: 'translateX(0)' })),
      state('footer', style({ transform: 'translateY(0)' })),
      transition('void => header', [
        style({ transform: 'translateY(-100%)' }),
        animate('1s ease-in-out')
      ]),
      transition('void => content', [
        style({ transform: 'translateX(-100%)' }),
        animate('1s ease-in-out')
      ]),
      transition('void => footer', [
        style({ transform: 'translateY(100%)' }),
        animate('1s ease-in-out')
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
