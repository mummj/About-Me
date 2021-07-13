'use strict'

// console.log('hello world');
//Introduction Question
let name = prompt('Hello, Welcome to my site. Please tell me your name');
alert('Welcome to my site ' + name + '. You are going to play a little guessing game about me.' );

alert('please answer each of the following with yes or no answers.')
//Fisrt Question
let teacherLow = prompt('Have I ever been a teacher?')

let teacher = teacherLow.toLowerCase();

if (teacher === 'yes' || teacher === 'y'){
  // console.log('that is correct')
  alert('That is correct!!')
} 
else if(teacher === 'no' || teacher === 'n'){
//  console.log('that is not correct')
  alert('That is not correct!')
}
else{
  alert('I did\'t understant that please try again')
}
//Second Question
let subjectLow = prompt('Do I teach English?')

let subject = subjectLow.toLowerCase();

if (subject === 'yes' || subject === 'y'){
  //  console.log('that is not correct')
  alert('That is not correct!!')
} 
else if(subject === 'no' || subject === 'n'){
  // console.log('that is correct')
  alert('That is correct!')
}
else{
  alert('I did\'t understant that please try again')
}
//Thrid Question
let coachLow = prompt('Do I coach a sport?')

let coach = coachLow.toLowerCase();

if (coach === 'yes' || coach === 'y'){
  // console.log('that is correct')
  alert('That is correct!!')
} 
else if(coach === 'no' || coach === 'n'){
  //  console.log('that is not correct')
  alert('That is not correct!')
}
else{
  alert('I did\'t understant that please try again')
}
//Fourth Question
let levelLow = prompt('Do I teach at the Middle School')

let level = levelLow.toLowerCase();

if (level === 'yes' || level === 'y'){
  //  console.log('that is not correct')
  alert('That is not correct!!')
} 
else if(level === 'no' || level === 'n'){
  // console.log('that is correct')
  alert('That is correct!')
}
else{
  alert('I did\'t understant that please try again')
}
//Fifth Question
let dirationLow = prompt('Have I been teaching for 7 years?')

let diration = dirationLow.toLowerCase();

if (diration === 'yes' || diration === 'y'){
  // console.log('that is correct')
  alert('That is correct!!')
} 
else if(diration === 'no' || diration === 'n'){
  //  console.log('that is not correct')
  alert('That is not correct!')
}
else{
  alert('I did\'t understant that please try again')
}

alert('Thank you for playing my game ' + name + ', please enjoy the webpage about me!')

