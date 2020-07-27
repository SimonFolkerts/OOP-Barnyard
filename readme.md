# Barnyard OOP

A small app written in object-oriented Javascript to implement the following brief:

1. Build a small application that represents a barnyard. The user can use the app to calculate the daily profit of the barnyard.

2. In the barnyard, there are a number of hens. Each hen can have eggs.

3. On any given day, healthy egg-laying hens lay one egg. The app should have an init method that creates the barnyard, hens and eggs.

> Each hen:
>
> - can be either healthy (egg-laying) or unhealthy.

> Each egg:
> - has a weight.
> - can be either healthy or unhealthy.
> There is also a variable which represents the current market value of an egg.

> The profit can be calculated by the following formula: weight x market value x number of healthy eggs.


## Steps

### Build Models
First we will create models that will represent the class of object we are creating. One for hens, one for eggs, and one for the barnyard. These will define what we want eggs and hens and bayards to be and what they can do.

Remember that it's convention that classes are capitalised.

1. Create a model folder.
1. Create an egg model 0
1. Create a hen model (o)>
1. Create a barnyard model

Next we need to set up the controller that will simulate the day of hens laying eggs.

1. import hen and barnyard
1. export a class that represents the controller
1. set it's initial values on instantiation.
1. define an init function that runs the sim
1. define a profit calculator that scans the chooks for eggs

Now we need to set up the main app that will instantiate the controller and run the sim, and then dsiplay the results.

1. import the controller and instantiate it to create a sim
1. set the number of hens, and then run the sim with a set number of hens.
1. then get the profit
1. finally print the results