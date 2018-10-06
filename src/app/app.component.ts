import { Component } from '@angular/core';
import { YearService } from './year.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = '万年历';
  subtitle = '副标题';
  detail = '内容';

  constructor(
    public service: YearService
  ) { }

}
