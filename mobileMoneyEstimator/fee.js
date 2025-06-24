const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function estimateTransactionFee(amountToSend) {
  const percentageFee = 0.015; // 1.5%
  const minFee = 10;
  const maxFee = 70;

  let calculatedFee = amountToSend * percentageFee;

  // Apply min and max fee limits
  if (calculatedFee < minFee) {
    calculatedFee = minFee;
  } else if (calculatedFee > maxFee) {
    calculatedFee = maxFee;
  }

  const totalDebited = amountToSend + calculatedFee;

  console.log(`\nSending KES ${amountToSend}:`);
  console.log(`Calculated Transaction Fee: KES ${calculatedFee}`);
  console.log(`Total amount to be debited: KES ${totalDebited}`);
  console.log(`\nSend Money Securely!\n`);
}

rl.question("Unatuma pesa Ngapi? (KES): ", function (input) {
  const amount = parseFloat(input);
  if (!isNaN(amount) && amount > 0) {
    estimateTransactionFee(amount);
  } else {
    console.log("Tafadhali andika kiasi sahihi cha kutuma.");
  }
  rl.close();
});
