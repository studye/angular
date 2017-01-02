import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-ngswitch-sample',
  templateUrl: './ngswitch-sample.component.html',
  styleUrls: ['./ngswitch-sample.component.css']
})
export class NgswitchSampleComponent implements OnInit {
  choice:number = 1;

  constructor() { }

  nextChoice() {
    this.choice += 1;

    if (this.choice > 5) {
      this.choice = 1;
    }
  }

  ngOnInit() {
  }

}
