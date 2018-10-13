import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { YearService } from '../year.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  animations: [
    trigger('month', [
      state('first', style({ transform: 'translateY(0)', opacity: 1 })),
      state('month', style({ transform: 'translateY(0)', opacity: 1 })),
      state('void', style({ transform: 'translateY(-50%)', opacity: 0 })),
      transition('void => first', [
        animate('1s 2s ease-in-out')
      ]),
      transition('void => month', [
        animate('1s ease-in-out')
      ])
    ])
  ]
})
export class CalendarComponent implements OnInit {

  /** 星期标题. */
  heads: string[];
  /** 动画完成月份. */
  animations: boolean[];

  constructor(
    public service: YearService
  ) {
    this.heads = ['一', '二', '三', '四', '五', '六', '日'];
    this.animations = [true];
  }

  ngOnInit() { }

}
