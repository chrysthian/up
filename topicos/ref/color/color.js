
// variables to store my colors of choice
let colors = ["red", "green", "blue", "aqua", "coral", "yellow", "teal", "tomato", "purple", "gold"];
// number of guesses
let guesses = 0;
// variable to store the correct answer (index of the array of colors)
let answer = 0;

function init() {
  // variable initialization
  guesses = 0;
  answer = 0;

  colors.sort();

  document.getElementById("colorNames").innerHTML = colors;

  // choose a random color
  answer = Math.floor(Math.random() * colors.length);

  // print the answer on the console
  console.log(colors[answer]);
}

function guess() {
  const { value } = document.getElementById("answer");
  guesses++;

  document.getElementById("feedback").innerHTML = checkInput(value);
}

function checkInput(value) {
  // message to be returned
  let returnMessage = "Sorry, I don't recognize your color";

  // iterate through the color Array
  for (let i = 0, len = colors.length; i < len; i++) {

    // if the guess matches to any value in the Array
    if (value === colors[i]) {
      // guess is higher
      if (i > answer) {
        returnMessage = "Sorry, your guess is not correct <br><br> Your answer is too <b>high</b> on the list";
      }

      // guess is lower
      if (i < answer) {
        returnMessage = "Sorry, your guess is not correct <br><br> Your answer is too <b>low</b> on the list";
      }

      // guess is correct
      if (i === answer) {
        returnMessage = "You guessed! <br><br>It took you " + guesses + " guesses to finish the game";
        document.body.style.backgroundColor = colors[answer];
        document.getElementById("answer").disabled = true;
      }
    }
  }

  return returnMessage;
}

