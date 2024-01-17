const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let secretNumber = 18;

function checkGuess(num) {
  if (num > secretNumber) {
    console.log('Too high.');
    return false;
  }
  if (num < secretNumber) {
    console.log('Too low.');
    return false;
  }

  console.log('Correct!');
  return true;
}
function askGuess() {
  rl.question('Enter a guess: ', answer => {
    if (checkGuess(+answer)) rl.close();
    else askGuess();
  })
}
askGuess();