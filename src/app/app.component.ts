import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations'
import { YearService } from './year.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('page', [
      state('header', style({ opacity: 1 })),
      state('content', style({ opacity: 1 })),
      state('footer', style({ opacity: 1 })),
      transition('void => header', [
        style({ opacity: 0, transform: 'translateY(-50px)' }),
        animate(500, style({ transform: 'translateY(0)' }))
      ]),
      transition('void => content', [
        style({ opacity: 0, transform: 'translateY(-25%)' }),
        animate('500ms 100ms ease-in', style({ transform: 'translateY(0)' }))
      ]),
      transition('void => footer', [
        style({ opacity: 0, transform: 'translateY(50px)' }),
        animate(500, style({ transform: 'translateY(0)' }))
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
