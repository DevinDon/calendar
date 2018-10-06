import { Component, OnInit } from '@angular/core';
import { YearService } from '../year.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  /** 星期标题. */
  heads: string[];

  constructor(
    public service: YearService
  ) {
    this.heads = ['一', '二', '三', '四', '五', '六', '日'];
  }

  ngOnInit() { }

}
