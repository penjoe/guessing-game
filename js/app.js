'use strict';

var score = 0

var name = prompt('Hello, what is your name?');
console.log ('The user\'s name is ' + name);

function quiz(yesOrNo, correct, incorrect, validation) {
  var response = prompt(yesOrNo).toLowerCase;

  while (response !== correct && response !== incorrect) {
    
      response = prompt( validation).toLowerCase();
    if (response === correct) {
      alert('you are correct');
        score++;
    } else if (response === incorrect)
      alert('you are wrong')
  }
}

quiz('Welcome to my quiz, ' + name + '! Riddle me this... is my name Joe?', 'yes', 'no', 'Please answer with a yes or a no');
quiz('Ok, ' + name + ', question number 2! Am I 27 years old?', 'no', 'yes', 'Please answer with a yes or a no')
quiz('Question #3 there ' + name + '. Am I from the Pacific Northwest?', 'yes', 'no', 'Please answer with a yes or a no')
quiz('Ok, ' + name + ' , did I go to the University of Washington? What is your final answer? ', 'no', 'yes', 'Please answer with a yes or a no')
quiz('Final question ' + name + ', was my last job in tech?', 'no', 'yes', 'Please answer with a yes or a no')





// var response = prompt('Welcome to my quiz, ' + name + '! Riddle me this... is my name Joe?').toLowerCase();

// while ( response !== 'yes' && response !== 'no' ) {
//   response = prompt( 'Please answer with a yes or a no').toLowerCase();
 
// } 
//   if (response === 'yes') {
//     alert('That is correct!');
//     score++
//   } else if (response === 'no') {
//     alert('You are wrong!');
//   }

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
var guess = Number(prompt(userAnswer));

for (var i = 0; i < 3; i++) {

    if (guess === correct) {
      alert('Congratulations!');
      break;
    } else if (guess > correct) {
      var guess = prompt(tooHigh);
    } else if (guess < correct) {
      var guess = prompt(tooLow);
      console.log(guess)
      score++
    }
  }
      // if (i === 4) {
      //   alert('Too bad! The correct answer was 11!')
  // }
}

numberGuess('Hey ' + name + ', pick a number between 1 and 20.' , 11, 'Too low! Try again!' , 'Too high! Try again!');
// Multiple choice question

var quiz7 = prompt('Ok ' + name + ' let\'s have some fun! Do you think you can name a few of my favorite foods?').toLowerCase();
var faveFoods = ['pizza' , 'steak' , 'ice cream'];

for (var i = 0; i < 5; i++) {
    if (quiz7 === faveFoods[0] || quiz7 === faveFoods[1] || quiz7 === faveFoods[2]) {
      alert('You are correct! That\'s one of my faves! I love pizza, steak and ice cream');
      score++
      // console.log(quiz7)
      break;
    } else if (quiz7 !== faveFoods[0] || quiz7 !== faveFoods[1] || quiz7 !== faveFoods[2]) {
      quiz7 = prompt('Nope! That food\'s nasty! Try again!');
    }
}
    if (i === 5) {
      alert('Too bad you couldn\'t guess them all! I love pizza, steak and ice cream!');
}  

alert('Alright ' + name + ', your score was ' + score + '!')

console.log(score)

//multiple choice function: question {sting} answers {array} of possible answers /attempts {Number}

// function askMultipleChoice(question, answers, attempts){

//   attemptLoop: for (attempts; attempts > 0; attempts--) {
//     var userAnswer = prompt(question).toLowerCase;
    

//     checkLoop: for (var answerCheck = 0; answerCheck < answers.length; answerCheck++){
//       if (userAnswer === answers[answerCheck]) {
//         alert('correct');
//         break attemptLoop;
//       }
//     }

//     alert('incorrect, you have ' + attempts - 1 + ' attempts');
//   }

// }

// askMultipleChoice('What are the colors of the rainbow?' , [red, blue, yellow] , 4);
// var quiz7 = prompt('Guess my fave food!');
// var faveFoods = ['pizza' , 'steak' , 'ice cream'];
// var attempts = 6;

// //nested loop using a label
// loop1: for (attempts = 0; attempts < 6; attempts++) {
//   var quiz7 = prompt('Guess my fave food!');
//   loop2: for (var answerIndex = 0; answerIndex < faveFoods.length; answerIndex++) {
//     quiz7 = quiz7.toLowerCase();
//     if (quiz7 === faveFoods[answerIndex]) {
//       console.log(quiz7);
//       alert('great job!');
//       break loop1;
//     // } else {
//     //   alert('Sorry, I love pizza, steak and ice cream')
//     // }
//   }
//   if (attempts < 6) alert("wrong")
// }