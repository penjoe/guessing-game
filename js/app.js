'use strict';

var score = 0
var name = prompt('Hello, what is your name?');

function quiz(yesOrNo, correct, incorrect) {

  var response = prompt(yesOrNo).toLowerCase;
    
  if (response === correct) {
      alert('You are correct!');
      score++;
    } else if (response === incorrect) {
      alert('You are wrong!');
    }
}

quiz('Welcome to my quiz, ' + name + '! Riddle me this... is my name Joe?', 'yes', 'no')
quiz('Ok, ' + name + ', question number 2! Am I 27 years old?', 'no', 'yes')
quiz('Question #3 there ' + name + '. Am I from the Pacific Northwest?', 'yes', 'no')
quiz('Ok, ' + name + ' , did I go to the University of Washington? What is your final answer? ', 'no', 'yes')
quiz('Next question ' + name + ', was my last job in tech?', 'no', 'yes')


function numberGuess(userAnswer, correct, tooHigh, tooLow) {
  var quiz6 = prompt(userAnswer);

for (var i = 4; i === 0; i--) {

    if (quiz6 < correct) {
    var quiz6 = prompt(tooLow);
  } else if (quiz6 > correct) {
    var quiz6 = prompt(tooHigh);
  } else if (quiz6 == correct) {
    var quiz6 = alert('Congratulations!');
    score++
  }

    if (i === 0) {
      alert('Too bad! The correct answer was 11!')
}
}
}
numberGuess('Hey ' + name + ', pick a number between 1 and 20.', 11, 'Too low! Try again!', 'Too high! Try again!')
// Multiple choice question


function multipleChoice(userAnswer, incorrect, correct) {
var quiz7 = prompt(userAnswer).toLowerCase();


for (var i = 0; i < 5; i++) {
    if (quiz7 === correct[0] || quiz7 === correct[1] || quiz7 === correct[2]) {
      alert('You are correct! That\'s one of my faves! I love pizza, steak and ice cream');
      score++
      break;
    } else if (quiz7 !== correct[0] || quiz7 !== correct[1] || quiz7 !== correct[2]) {
      quiz7 = prompt(incorrect);
    }
  }
    if (i > 5) {
      alert('Too bad you couldn\'t guess them all! I love pizza, steak and ice cream!');
  }  
}

multipleChoice('Ok ' + name + ' let\'s have some fun! Do you think you can name a few of my favorite foods?', 'Nope! Try again!', ['pizza' , 'steak' , 'ice cream'])


alert('Alright ' + name + ', your score was ' + score + '!')

