// create an egg class, that when instantiated takes a weight and a healthy status ansd sets them to the instance
export default class Egg {
  constructor(weight, isHealthy) {
    this.weight = weight; //grams
    this.isHealthy = isHealthy
  }
}