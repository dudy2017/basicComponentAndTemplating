export class EventModel {
  /* object assign - */
  id: number;
  name: string;
  pic?: string;    /*a ? azt jelenti, hogy opcionális a kitöltése*/

  constructor(id= 0, name= '', pic= '') {
    this.id = id;
    this.name = name;
    this.pic = pic;
  }
}
