//we need the barnyard so that we can simulate a day of chickens
import Barnyard from "../models/Barnyard.js";

// we need hens so we can put them in the yard
import Hen from "../models/Hen.js";

// we don't need to import eggs, because the hen class comes with them and handles them itself.

//we need to export the controller so it can be used by the main program.
export default class BarnyardController {
  // on creation, the controller will prepare a property to store the yard, and will also set the value of an egg in cents per gram
  constructor() {
    this.barnyard;
    // cost per gram of egg
    this.EGG_MARKET_VALUE = 0.6; //cents per g
  }

  //this initiates the simulation with a given number of choOooks
  init(noOfHens) {
    //create a new yard and store it
    this.barnyard = new Barnyard();
    //populate the yard with chickens by looping for a given number of hens, each loop deciding if the hen is healthy or not, then crating it and adding it to the yard via the yards add hen method.
    for (let i = 0; i < noOfHens; i++) {
      // if the random number is greater than 0.5, chook is healthy
      let isHealthy = Math.random() >= 0.5;
      this.barnyard.addHen(new Hen(isHealthy));
    }
    // now that we have hens in the yard, we can have them lay eggs

    // get the hens in the barnyard
    let hens = this.barnyard.hens;

    //and have the healthy ones lay eggs.
    for (const hen of hens) {
      if (hen.isHealthy) {
        // if hen is healthy, egg should created of a random size appropriate for the average chicken egg (40 to 70g, I dunno)
        let eggWeight = 40 + Math.random() * 30;
        // and it should have a chance to be a healthy or unhealthy egg
        let eggIsHealthy = Math.random() >= 0.5;
        // having set the egg up, lay it (remember chickens track their clutch)
        hen.layEgg(eggWeight, eggIsHealthy);
      }
    }
  }

  //this method looks at the barnyard, checks the hens and figures out how many eggs there are and calculates profit based on market value
  getProfit() {
    // start at 0 profit
    let profit = 0;
    // get all the hens currently in the yard
    const hens = this.barnyard.hens;
    // for each hen
    for (const hen of hens) {
      // if it's healthy
      if (hen.isHealthy) {
        // get its eggs
        let eggs = hen.eggs;
        // and for each of it's eggs
        for (const egg of eggs) {
          // if the egg is healthy
          if (egg.isHealthy) {
            // add it's value to the total
            profit += egg.weight * this.EGG_MARKET_VALUE;
          }
        }
      }
    }
    //once all hens checked, return the profit
    return profit;
  }
}
