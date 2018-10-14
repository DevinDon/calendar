import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { YearService } from '../service/year.service';
import { AnimationService } from '../service/animation.service';
import { AnimationConfig } from '../config/animation.config';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  animations: [
    trigger('month', [
      state('month', style({ transform: 'translateX(0)', opacity: 1 })),
      state('void', style({ transform: 'translateX(-50%)', opacity: 0 })),
      transition('void => month', [
        // animate(AnimationConfig.normal + ' ease-out')
        animate('0.5s ease-out')
      ]),
      transition('month => void', [
        // animate(`${AnimationConfig.normal} ease-out`, style({ transform: 'translateX(50%)', opacity: 0 }))
        animate('0.5s ease-in', style({ transform: 'translateX(50%)', opacity: 0 }))
      ]),
    ])
  ]
})
export class CalendarComponent implements OnInit {

  /** 星期标题. */
  heads: string[];

  constructor(
    public year: YearService,
    public animation: AnimationService
  ) {
    this.heads = ['一', '二', '三', '四', '五', '六', '日'];
  }

  ngOnInit() { }

}
