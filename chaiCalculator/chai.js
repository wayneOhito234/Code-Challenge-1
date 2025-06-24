const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calculateChaiIngredients(numberOfCups) {
  const waterPerCup = 200;
  const milkPerCup = 50;
  const teaLeavesPerCup = 1;
  const sugarPerCup = 2;

  const water = waterPerCup * numberOfCups;
  const milk = milkPerCup * numberOfCups;
  const teaLeaves = teaLeavesPerCup * numberOfCups;
  const sugar = sugarPerCup * numberOfCups;

  console.log(`\nTo make ${numberOfCups} cups of Chai, you will need:`);
  console.log(`Water: ${water} ml`);
  console.log(`Milk: ${milk} ml`);
  console.log(`Tea Leaves (Majani): ${teaLeaves} tablespoons`);
  console.log(`Sugar (Sukari): ${sugar} teaspoons`);
  console.log(`\nEnjoy your Chai Bora!`);
}

rl.question("Karibu! How many cups of Chai would you like to make? ", function (input) {
  const numberOfCups = parseInt(input);
  if (!isNaN(numberOfCups) && numberOfCups > 0) {
    calculateChaiIngredients(numberOfCups);
  } else {
    console.log("Please enter a valid number of cups.");
  }
  rl.close();
});
