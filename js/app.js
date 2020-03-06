'use strict';

var score = 0

var name = prompt('Hello, what is your name?');
console.log ('The user\'s name is ' + name);

function quiz(yesOrNo, correct, incorrect, validation) {
  var response = prompt(yesOrNo).toLowerCase;
  if (response === 'yes' && response === 'no')
  while (response !== 'yes' && response !== 'no') {
      response = prompt( validation).toLowerCase();
    if (response === correct) {
        alert('you are correct');
        score++;
    } else if (response === incorrect)
    alert('you are wrong')
}
}
quiz('Welcome to my quiz, ' + name + '! Riddle me this... is my name Joe?', 'yes', 'no', 'Please answer with a yes or a no')
quiz('Welcome to my quiz, ' + name + '! question number 2! Am I 27 years old?', 'no', 'yes', 'Please answer with a yes or a no')
quiz('Welcome to my quiz, ' + name + '! Am I from the Pacific Northwest?', 'yes', 'no', 'Please answer with a yes or a no')
quiz('Welcome to my quiz, ' + name + '! did I go to the University of Washington? What is your final answer?', 'no', 'yes', 'Please answer with a yes or a no')
quiz('Welcome to my quiz, ' + name + '! was my last job in tech?', 'no', 'yes', 'Please answer with a yes or a no')

// var quiz1 = prompt('Welcome to my quiz, ' + name + '! Riddle me this... is my name Joe?').toLowerCase();

// while ( quiz1 !== 'yes' && quiz1 !== 'no' ) {
//   quiz1 = prompt( 'Please answer with a yes or a no').toLowerCase();
// } 
//   if (quiz1 === 'yes') {
//   alert('That is correct!');
//   score++
// } else if (quiz1 === 'no') {
//   alert('You are wrong!');
// }

// console.log ('The correct answer is yes!');

// var quiz2 = prompt('Ok, ' + name + ', question number 2! Am I 27 years old?').toLowerCase();

// while ( quiz2 !== 'yes' && quiz2 !== 'no') {
//   quiz2 = prompt( 'Please answer with a yes or a no').toLowerCase();

// }

//   if (quiz2 === 'no') {
//   alert('That is correct!');
//   score++
// } else if (quiz2 === 'yes') {
//   alert('You are wrong!');
// }

// console.log ('The correct answer is no!');

// var quiz3 = prompt('Question #3 there ' + name + '. Am I from the Pacific Northwest?').toLowerCase();

// while ( quiz3 !== 'yes' && quiz3 !== 'no') {
//   quiz3 = prompt( 'Please answer with a yes or a no').toLowerCase();

// }

//   if (quiz3 === 'yes') {
//   alert('That is correct!');
//   score++
// } else if (quiz3 === 'no') {
//   alert('You are wrong!');
// }

// console.log ('The answer is yes!');

// var quiz4 = prompt(name + ' , did I go to the University of Washington? What is your final answer? ').toLowerCase();

// while ( quiz4 !== 'yes' && quiz4 !== 'no') {
//   quiz4 = prompt( 'Please answer with a yes or a no').toLowerCase();

// }

//   if (quiz4 === 'no') {
//   alert('That is correct!');
//   score++
// } else if (quiz4 === 'yes') {
//   alert('You are wrong!');
// }

// console.log ('The correct answer is no!');

// var quiz5 = prompt('Final question ' + name + ', was my last job in tech?').toLowerCase();

// while ( quiz5 !== 'yes' && quiz5 !== 'no') {
//   quiz5 = prompt( 'Please answer with a yes or a no').toLowerCase();

// }

//   if (quiz5 === 'no') {
//   alert('That is correct!');
//   score++
// } else if (quiz5 === 'yes') {
//   alert('You are wrong!');
// }

// console.log ('The answer is no!');
function numberGuess(userAnswer, correct, tooHigh, tooLow) {
  var quiz6 = prompt(userAnswer);
// var correct = 11;

for (var i = 0; i < 3; i++) {

    if (quiz6 < correct) {
    var quiz6 = prompt(tooLow);
  } else if (quiz6 > correct) {
    var quiz6 = prompt(tooHigh);
  } else if (quiz6 == correct) {
    var quiz6 = alert('Congratulations!');
    console.log(quiz6)
    score++
  }

    if (i === 4) {
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
      // console.log(quiz7)
      break;
    } else if (quiz7 !== correct[0] || quiz7 !== correct[1] || quiz7 !== correct[2]) {
      quiz7 = prompt(incorrect);
    }
}
    if (i === 5) {
      alert('Too bad you couldn\'t guess them all! I love pizza, steak and ice cream!');
} 
} 
multipleChoice('Ok ' + name + ' let\'s have some fun! Do you think you can name a few of my favorite foods?', 'Nope! That food\'s nasty! Try again!', ['pizza' , 'steak' , 'ice cream'])


alert('Alright ' + name + ', your score was ' + score + '!')

console.log(score)

