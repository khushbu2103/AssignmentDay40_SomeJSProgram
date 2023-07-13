console.log("Welcome to the day 40 assignment")

////question 1/////
let randomNumber = Math.floor(Math.random() * 10);
console.log("generated random number is: "+randomNumber)

////question 2/////
let randomNumber2 = (Math.floor(Math.random() * 6)+1);
console.log("generated random number to get dice between 1-6 is: "+randomNumber2)

////question 3/////
let DiceA = (Math.floor(Math.random() * 6)+1);
let DiceB = (Math.floor(Math.random() * 6)+1);
let sumOfRandomDiceNumber = DiceA+DiceB;
console.log("1st random dice number: " +DiceA+ "\n2nd random dice number: "+DiceB+ "\naddition of two random dice number: "+sumOfRandomDiceNumber)

////question 4////
let sum = 0;
let count = 5;

for (let i = 0; i < count; i++) {
  let randomValue = Math.floor(Math.random() * 90) + 10;
  sum += randomValue;
  console.log("random values: " +randomValue)
}
let average = sum / count;
console.log("The sum of the random values is: " +sum);
console.log(`The average of the random values: ${average}`);

////question 5////
// a. 1ft = 12 in then 42 in = ? ft
let inches = 42;
let feet = inches / 12;
console.log(+inches+ " inches is equals to " +feet+ " feets");

// b. Rectangular Plot of 60 feet x 40 feet in meters
let lengthFeet = 60;
let widthFeet = 40;
let lengthMeters = lengthFeet * 0.3048;
let widthMeters = widthFeet * 0.3048;
console.log("A rectangular plot of " +lengthFeet+  " feet x " +widthFeet+ " feet is equal to " +lengthMeters+ " meters x " +widthMeters+ " meters");

// c. Calculate area of 25 such plots in acres
let areaMetersSquared = lengthMeters * widthMeters;
let areaAcres = areaMetersSquared / 4046.86;
let numPlots = 25;
let totalAreaAcres = areaAcres * numPlots;
console.log("The area of "+numPlots+ " plot is: " +totalAreaAcres+ " Acres");