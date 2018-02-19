import { Component } from '@angular/core';

export class EventModel {
  id: number;
  name: string;
}

@Component({
  selector: 'app-listdemo',
  templateUrl: './listdemo.component.html',
  styleUrls: ['./listdemo.component.css']
})
export class ListdemoComponent {

  events: EventModel[];

  constructor() {
    this.events = [
      {
        id: 1,
        name: 'sziget'
      },
      {
        id: 2,
        name: 'fezen'
      },
      {
        id: 3,
        name: 'rockmaraton'
      },
        {
        id: 4,
        name: 'oktobefest'
      }
    ];
    console.log('megjött a listdemo');
  }

  delete(id: number) {
    this.events = this.events.filter( (ev: EventModel) => ev.id !== id   );
  }
}
