import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {

  /** 页面 header 和　footer 初始化完毕时, content 进场. */
  public contentShouldIn: boolean;

  public state;

  constructor() {
    this.contentShouldIn = false;
    this.state = {};
    this.state.month = 'month';
  }

}
