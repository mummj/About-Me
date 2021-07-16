'use strict'


let score = 0
let name = prompt('Hello, Welcome to my site. Please tell me your name');
alert('Welcome to my site ' + name + '. You are going to play a little guessing game about me.' );

alert('please answer each of the following with yes or no answers.')

function correct(){
  if (teacher === 'yes' || teacher === 'y'){
    alert('That is correct!!')
    score++;
  } 
  else if(teacher === 'no' || teacher === 'n'){
    alert('That is not correct!')
  }
  else{
    alert('I did\'t understant that please try again')
  }
}
function incorrect(){
  if (subject === 'yes' || subject === 'y'){
    alert('That is not correct!!')
  } 
  else if(subject === 'no' || subject === 'n'){
    alert('That is correct!')
    score++;
  }
  else{
    alert('I did\'t understant that please try again')
  }
}


let teacherLow = prompt('Have I ever been a teacher?')

let teacher = teacherLow.toLowerCase();

correct();

let subjectLow = prompt('Do I teach English?')

let subject = subjectLow.toLowerCase();

incorrect();

let coachLow = prompt('Do I coach a sport?')

let coach = coachLow.toLowerCase();

correct();


let levelLow = prompt('Do I teach at the Middle School')

let level = levelLow.toLowerCase();

incorrect();


let dirationLow = prompt('Have I been teaching for 7 years?')

let diration = dirationLow.toLowerCase();

correct();


let myNumb = 100;
let number = Math.floor(Math.random() * myNumb + 1);
let tries = 3;
let count = 0;

while(attempt !== number){
  var attempt = prompt("Please guess my number. It is between 1 and " + myNumb);
  count += 1;
  if (attempt > number){
    alert('your guess is too high please try again');
  }
  if (attempt < number){
    alert('your guess is too low please try again')
  }
  if (count > tries){
    alert('sorry you have no more tries left the number was ' + number);
    break
  }
  if (attempt == number){
    alert('congradulation!! you guessed the correct number, the number was ' + number);
    score++;
    break
  }
}


alert('Now you are going to get 6 guesses to guess what classes that I teach!')
const classArray = ['robotics one', 'robotics two', 'robotics three', 'intro to computer science', 'codeing'];
let classArrayString = classArray.join(', ')
let guess = 1;
let answer = false
while(!answer && guess < 7){
  let classes = prompt('what are the classes that I teach?');
   for (let i = 0; i < classArray.length; i++){
    if(classes === classArray[i]){
     alert('you got one correct!!');
    answer = true;
    break;
   }
  }
  if(answer){
    alert('Good Job, here are your other choices that you could have gotten ' + classArrayString);
    score++;
  }
  if(!answer && guess < 6){
    alert('that was guess number ' + guess + ' please try again');
  }
  if(!answer && guess === 6){
    alert('sorry you did not get this correct the possible answers are ' + classArrayString);
  }
  guess++;
}

alert('Thank you ' + name + ' for playing my game. You got ' + score + ' correct out of 7 questions good job!! Please enjoy my site about me.')






