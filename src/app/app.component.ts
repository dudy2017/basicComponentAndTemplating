import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  events = ['sziget', 'efott', 'fezen', 'szin'];
  show = true;

  toggle() {
    this.show = !this.show; /*a show változó értékét megváltoztatja az ellentétére ( true/false )*/
  }

  demo(ev: Event) {
    console.log(ev.type);
  }
}
