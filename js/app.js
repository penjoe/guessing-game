'use strict';

var name = prompt('Hello, what is your name?');
console.log ('The user\'s name is ' + name);

var quiz1 = prompt('Welcome to my quiz, ' + name + '! Riddle me this... is my name Joe?') 
  if (quiz1.toLowerCase() == 'yes') {
    alert('That is correct!');
  } else if (quiz1.toLowerCase() == 'no') {
    alert('You are wrong!');
  }

// console.log ('The correct answer is yes!');

var quiz2 = prompt('Ok, ' + name + ', question number 2! Am I 27 years old?');
if (quiz2.toLowerCase() == 'no') {
  alert('That is correct!');
} else if (quiz2.toLowerCase() == 'yes') {
  alert('You are wrong!');
}

// console.log ('The correct answer is no!');

var quiz3 = prompt('Question #3 there ' + name + '. Am I from the Pacific Northwest?');
if (quiz3.toLowerCase() == 'yes') {
  alert('That is correct!');
} else if (quiz3.toLowerCase() == 'no') {
  alert('You are wrong!');
}

// console.log ('The answer is yes!');

var quiz4 = prompt(name + ' , did I go to the University of Washington? What is your final answer? ');
if (quiz4.toLowerCase() == 'no') {
  alert('That is correct!');
} else if (quiz4.toLowerCase() == 'yes') {
  alert('You are wrong!');
}

// console.log ('The correct answer is no!');

var quiz5 = prompt('Final question ' + name + ', was my last job in tech?');
if (quiz5.toLowerCase() == 'no') {
  alert('That is correct!');
} else if (quiz5.toLowerCase() == 'yes') {
  alert('You are wrong!');
}

// console.log ('The answer is no!');

