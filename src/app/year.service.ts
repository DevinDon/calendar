import { Injectable, OnInit } from '@angular/core';

interface Results {
  [index: number]: any[];
}

interface YearNmaes {
  [index: number]: string;
}

@Injectable({
  providedIn: 'root'
})
export class YearService {

  /** 缓存结果集. */
  results: Results;

  /** 年份. */
  year: number;
  /** 干支纪年法. */
  yearNames: YearNmaes;
  /** 天干. */
  heaven: string[];
  /** 地支. */
  earth: string[];

  constructor() {
    this.results = {};
    this.yearNames = {};
    this.year = new Date().getFullYear();
    this.heaven = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
    this.earth = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
  }

  /**
   * 生成指定年份的日期信息.
   * @returns 年份信息, 以月和周为分隔的三维数组.
   */
  calc() {
    if (this.results[`Y${this.year}`]) {
      return this.results[`Y${this.year}`];
    }

    let result = [];
    for (let month = 0; month < 12; month++) {
      result.push([]);
      const firstday = new Date(this.year, month, 1).getDay();
      const total = new Date(this.year, month + 1, 0).getDate();
      let week = [];
      for (let i = firstday - 1; i > 0; i--) {
        week.push(0);
      }
      for (let i = 1; i <= total; i++) {
        if (week.length < 7) {
          week.push(i);
        } else {
          result[month].push(week);
          week = [];
          week.push(i);
        }
      }
      while (week.length < 7) {
        week.push(0);
      }
      result[month].push(week);
    }
    this.results[`Y${this.year}`] = result;
    return result;
  }

  calcYearName() {
    if (this.results[`N${this.year}`]) {
      return this.results[`N${this.year}`];
    }

    return this.results[`N${this.year}`] = `${this.heaven[(this.year - 4) % 10]}${this.earth[(this.year - 4) % 12]}`;
  }

}
