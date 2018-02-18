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
  inputContent:string;

  toggle() {
    this.show = !this.show; /*a show változó értékét megváltoztatja az ellentétére ( true/false )*/
    this.inputContent="ez az input értéke";
  }

  demo(ev: MouseEvent) {
    console.log(ev.screenX);
  }
}
