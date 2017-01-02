import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass-sample',
  templateUrl: './ngclass-sample.component.html',
  styleUrls: ['./ngclass-sample.component.css']
})
export class NgclassSampleComponent implements OnInit {

  isBordered: boolean;
  classesObj: Object;
  classList: string[];

  constructor() {
    this.isBordered = true;
    this.classList = ['blue', 'round'];
    this.toggleBorder();
  }

  toggleBorder(): void {
    this.isBordered = !this.isBordered;
    this.classesObj = {
      bordered: this.isBordered
    };
  }

  toggleClass(cssClass: string): void {
    var pos: number = this.classList.indexOf(cssClass);
    if (pos > -1) {
      this.classList.splice(pos, 1);
    } else {
      this.classList.push(cssClass);
    }
  }

  ngOnInit() {
  }

}
