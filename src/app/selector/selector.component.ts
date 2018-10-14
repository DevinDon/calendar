import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { YearService } from '../service/year.service';
import { AnimationConfig } from '../config/animation.config';
import { AnimationService } from '../service/animation.service';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css'],
  animations: [
    trigger('change', [
      state('currect', style({
        opacity: 1,
        transform: 'scale(1)',
        width: '*'
      })),
      state('other', style({
        opacity: 0.5,
        transform: 'scale(0.5)',
        width: '*',
        margin: '0 -1rem'
      })),
      state('otherMonth', style({
        opacity: 0.5,
        transform: 'scale(0.5)',
        width: '*'
      })),
      state('void', style({
        opacity: 0,
        transform: 'scale(0)',
        width: 0
      })),
      transition('void <=> *', [
        // animate(`${AnimationConfig.normal} ease-out`)
        animate('0.75s ease-out')
      ]),
      transition('currect <=> other, currect <=> otherMonth', [
        // animate(`${AnimationConfig.normal} ease-out`)
        animate('0.75s ease-out')
      ])
    ])
  ]
})
export class SelectorComponent implements OnInit {

  constructor(
    public year: YearService,
    public animation: AnimationService
  ) { }

  ngOnInit() { }

  months(month: number) {
    return [month - 1 > 0 ? month - 1 : 12, month, month + 1 < 13 ? month + 1 : 1];
  }

  previousYear(): void {
    this.year.year = this.year.year - 1;
    this.animation.state.month = 'void';
  }

  nextYear(): void {
    this.year.year = this.year.year + 1;
    this.animation.state.month = 'void';
  }

  previousMonth(): void {
    this.year.month = this.year.month - 1 > 0 ? this.year.month - 1 : 12;
    this.animation.state.month = 'void';
  }

  nextMonth(): void {
    this.year.month = this.year.month + 1 < 13 ? this.year.month + 1 : 1;
    this.animation.state.month = 'void';
  }

  state(i: number): string {
    return i === 1 ? 'currect' : 'other';
  }

  stateMonth(i: number): string {
    return i === 1 ? 'currect' : 'otherMonth';
  }

}
