import { Component } from '@angular/core';
import Custom from "";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ng Directive';
  custom = new Custom();
}
