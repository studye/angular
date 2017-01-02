import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor-sample',
  templateUrl: './ngfor-sample.component.html',
  styleUrls: ['./ngfor-sample.component.css']
})
export class NgforSampleComponent implements OnInit {

  cities: string[];
  people: Object[];
  peopleByCity: Object;

  constructor() {
    this.cities = ['Miami', 'Sao Paulo', 'New York'];
    this.people = [
      { name: 'Anderson', age: 35, city: 'Sao Paulo' },
      { name: 'John', age: 12, city: 'Miami' },
      { name: 'Peter', age: 22, city: 'New York' }
    ];
    this.peopleByCity = [
      {
        city: 'Miami',
        people: [
          { name: 'John', age: 12 },
          { name: 'Angel', age: 22 }
        ]
      },
      {
        city: 'Sao Paulo',
        people: [
          { name: 'Anderson', age: 35 },
          { name: 'Felipe', age: 36 }
        ]
      }
    ];
  };

  ngOnInit() {
  }

}
