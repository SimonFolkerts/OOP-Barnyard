// import the controller class
import BarnyardController from "./controllers/BarnyardController.js";

// create a controller from the class
const barnyardCtrl = new BarnyardController();
// set a number of chooks
const NO_OF_HENS = 200;
// instruct the controller to run the sim with the given number if chooks
barnyardCtrl.init(NO_OF_HENS);
console.log(barnyardCtrl.barnyard.hens);

// now get the profit from the hens and their eggs
const profitCents = barnyardCtrl.getProfit().toFixed(0);
console.log("profit", profitCents + "c");

// ----------------------------------------------------------------

// get the container to display the yard in
const barnyardEl = document.querySelector(".barnyard");
// create an empty string that will hold our html
let htmlString = "";
// get the hens
const hens = barnyardCtrl.barnyard.hens;
// start a counter at zero
let totalEggs = 0;
let healthyEggs = 0;
let unhealthyEggs = 0;
//for each hen, generate a graphic that represents it and add it to the string
for (const hen of hens) {
  //this represents a hen
  htmlString += " --('^')--  ";
  //each chicken has its eggs looped through and added to the string too
  for (const egg of  hen.eggs) {
    //this represents an egg
    // if healthy print healthy egg and count it
    if (egg.isHealthy) {
    htmlString += "0  ";
    healthyEggs++;

    //else print unhealthy egg and count it
    } else {
      htmlString += "x";
      unhealthyEggs++;
    }
    //for either healthy or unhealthy eggs count to total
    totalEggs++;
  };
};

// insert the values and format for display
htmlString +=
  `<p>Total profit for ${totalEggs} eggs is $${profitCents/100}<br/>(${healthyEggs} healthy, ${unhealthyEggs} unhealthy)</p>`;

//display hens and their eggs
barnyardEl.innerHTML = htmlString;