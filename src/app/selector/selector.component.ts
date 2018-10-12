import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { YearService } from '../year.service';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css'],
  animations: [
    trigger('year', [
      state('currect', style({
        opacity: 1,
        transform: 'scale(1)',
        width: '*'
      })),
      state('other', style({
        opacity: 0.5,
        transform: 'scale(0.5)',
        width: '*'
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

  state(i: number): string {
    return i === 1 ? 'currect' : 'other';
  }

}
