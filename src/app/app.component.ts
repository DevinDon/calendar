import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { YearService } from './year.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('page', [
      state('header', style({ transform: 'translateY(0)', opacity: 1 })),
      state('content', style({ transform: 'translateY(0)', opacity: 1 })),
      state('footer', style({ transform: 'translateY(0)', opacity: 1 })),
      state('void', style({ opacity: 0 })),
      transition('void => header', [
        style({ transform: 'translateY(-50%)' }),
        animate('1s 1s ease-out')
      ]),
      // transition('void => content', [
      //   style({ transform: 'translateY(-50%)' }),
      //   animate('1s 2s ease-in-out')
      // ]),
      transition('void => footer', [
        style({ transform: 'translateY(50%)' }),
        animate('1s 1s ease-out')
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
