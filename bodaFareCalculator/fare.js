const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calculateBodaFare(distanceInKm) {
  const baseFare = 50;
  const chargePerKm = 15;

  const travelFare = distanceInKm * chargePerKm;
  const totalFare = baseFare + travelFare;

  console.log(`\nUko kwote? Io ni ${distanceInKm} km:`);
  console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
  console.log(`Mpaka Uko: KES ${travelFare}`);
  console.log(`Total: KES ${totalFare}`);
  console.log(`\nPanda Pikipiki!\n`);
}

rl.question("Unafika wapi Mkubwa? Kilometer ngapi?: ", function (input) {
  const distance = parseFloat(input);
  if (!isNaN(distance) && distance > 0) {
    calculateBodaFare(distance);
  } else {
    console.log("Tafadhali andika nambari sahihi ya kilomita.");
  }
  rl.close();
});
