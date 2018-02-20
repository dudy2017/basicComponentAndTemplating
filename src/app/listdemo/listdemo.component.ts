import { Component } from '@angular/core';
import {EventModel} from './event-model';



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
        name: 'Sziget fesztivál',
        pic: 'https://bkk.hu/wp-content/uploads/2017/08/sziget-2017-logo.png'
      },
      {
        id: 2,
        name: 'fezen',
        pic: 'http://hammerworld.hu/images/upload/FEZ17WHITE.jpg'
      },
      {
        id: 3,
        name: 'rockmaraton',
        pic: 'https://metal.hu/wp-content/uploads/2017/07/15327345_10155464553766521_811722810673252682_n.png'

      },
        {
        id: 4,
        name: 'oktobefest',
        pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3dPHcxgo2BiHixXMOGb1A21MEsxKQGsUUTwfGx68pi2rC1dRq'
      }
    ];
    console.log('megjött a listdemo');
  //   const nagyobbId = this.events.reduce((x: EventModel, y: EventModel) => {
  //     /*reduce() végigmegy a tömbön és visszaadja a legnagyobb elemet */
  //    /* logikai vizsgálat rövidebben: (logikai vizsgálat) ? ha igaz : ha hamis*/
  //    return x.id > y.id ? x : y;
  //     // if (x.id < y.id) {
  //     //   return y;
  //     // } else {
  //     //   return x;
  //     // }
  //   }).id;    /*ekkor csak az id-t adja vissza*/
  //   console.log(nagyobbId);
   }

  delete(id: number) {
    this.events = this.events.filter( (ev: EventModel) => ev.id !== id   );
  }

  add(newEventNameInput: HTMLInputElement) {
    console.log(newEventNameInput.value);
    const maxId = this.events.reduce(( x, y ) => x.id > y.id ? x : y).id;
    this.events = [...this.events, new EventModel(maxId + 1, newEventNameInput.value)];
    newEventNameInput.value = '';
  }


}
