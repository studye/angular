import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngnonbindable-sample',
  templateUrl: './ngnonbindable-sample.component.html',
  styleUrls: ['./ngnonbindable-sample.component.css']
})
export class NgnonbindableSampleComponent implements OnInit {

  content: string;

  constructor() {
    this.content = 'Some text';
  }

  ngOnInit() {
  }

}
