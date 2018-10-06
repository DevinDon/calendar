import { Component, OnInit } from '@angular/core';
import { YearService } from '../year.service';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit {

  constructor(
    public service: YearService
  ) { }

  ngOnInit() { }

}
