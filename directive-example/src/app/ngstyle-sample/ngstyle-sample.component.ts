import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle-sample',
  templateUrl: './ngstyle-sample.component.html',
  styleUrls: ['./ngstyle-sample.component.css']
})
export class NgstyleSampleComponent implements OnInit {
  color: string;
  fontSize: number;
  style: {
    'background-color': string,
    'border-radius': string,
    border?: string,
    width?: string,
    height?: string
  };

  constructor() {
    this.fontSize = 16;
    //lsthis.color = 'blue';
    this.style = {
      'background-color': '#ccc',
      'border-radius': '50px',
      'height': '30px',
      'width': '30px'
    };
  }

  apply(color: string, fontSize: number) {
    this.color = color;
    this.fontSize = fontSize;
  }

  ngOnInit() {
  }

}
