//create a barnyard, a space for the hens to reside. it is simple an array that will hold hens. It has a method that will allow it to add hens to its array

export default class Barnyard {
  constructor() {
    this.hens = [];
  }

  addHen(hen) {
    this.hens.push(hen)
  }
}