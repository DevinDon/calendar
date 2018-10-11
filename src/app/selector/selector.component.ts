import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { YearService } from '../year.service';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css'],
  animations: [
    trigger('year', [
      state('previous', style({
        opacity: 0.5,
        transform: 'scale(0.25)'
      })),
      state('currect', style({
        opacity: 1
      })),
      state('next', style({
        opacity: 0.5,
        transform: 'scale(0.25)'
      })),
      transition('* => *', animate('2500ms ease-in'))
      // transition('')
    ])
  ]
})
export class SelectorComponent implements OnInit {

  constructor(
    public service: YearService
  ) { }

  ngOnInit() { }

  state(i: number): string {
    if (i === 0) {
      return 'previous';
    } else if (i === 1) {
      return 'currect';
    } else if (i === 2) {
      return 'next';
    } else {
      return '';
    }
  }

}
