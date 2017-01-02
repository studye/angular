import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif-sample',
  templateUrl: './ngif-sample.component.html',
  styleUrls: ['./ngif-sample.component.css']
})
export class NgifSampleComponent implements OnInit {
  num1:number = 1;
  num2:number = 2;
  str:string = "test";
  isTrue:boolean = true;
  constructor() { }

  ngOnInit() {
  }

  isShown(){
    return true;
  }

}
