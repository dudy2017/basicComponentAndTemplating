import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './eventComponent.html',
  styleUrls:  ['./event.component.css']
})

export class EventComponent {
  title = 'Szia Dudy';

  constructor() {
    console.log(`${this.title}  - címe az oldalnak`);
    this.greetings();
  }

  greetings() {
    console.log('még nem működik');
  }
}
