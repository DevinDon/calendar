import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { YearService } from '../year.service';

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
      state('void', style({
        opacity: 0,
        transform: 'scale(0)',
        width: 0
      })),
      transition('void <=> other', [
        animate(500)
      ]),
      transition('currect <=> other', [
        animate(500)
      ])
    ])
  ]
})
export class SelectorComponent implements OnInit {

  constructor(
    public service: YearService
  ) { }

  ngOnInit() { }

  months(month: number) {
    return [month - 1 > 0 ? month - 1 : 12, month, month + 1 < 13 ? month + 1 : 1];
  }

  state(i: number): string {
    return i === 1 ? 'currect' : 'other';
  }

}
