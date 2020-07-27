import Egg from "./Egg.js";

//when a hen is created via this class, it takes a health status and also gets an array for eggs
export default class Hen {
  constructor(isHealthy) {
    this.isHealthy = isHealthy;
    this.eggs = [];
  }

  //it also gets a method that allows it to lay eggs, whereby it creates a new egg and adds it to it's array of eggs
  layEgg(weight, isHealthy) {
  let egg = new Egg(weight, isHealthy);
  this.eggs.push(egg)
  }
}

