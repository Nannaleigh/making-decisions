////////// PROBLEM 1 //////////
/*
  Create a variable called 'lovesCode' and set it equal to true. 
  Check to see if 'lovesCode' is equal to true or false. 
  If it is true, console log "I love to code!"
  If it is not, console log "Coding has its challenges."
*/

let lovesCode = true

if (lovesCode == true) { 
  console.log ('I love to code!')
}

else {
  console.log ('Coding has its challenges.')
}
// For problems 2-3 use the following lines of code:
var amysAge = 29
var brittanisAge = 34
var amysBirthYear = 1991
var brittanisBirthYear = 1986

////////// PROBLEM 2 //////////

/*
  Using an if statement and a comparison operator, create code that will check if Amy or Brittani is older, and then console.log '{name} is older'. Hint: Consider what will happen if they are the same age. Handle this situation.
*/

if (amysAge > brittanisAge) {
  console.log ('Amy is older.')
}
else if (brittanisAge > amysAge) {
  console.log ('Brittani is older.')
}
  else {
    console.log ('They are the same age.')
  }


////////// PROBLEM 3 //////////

/*
  Using an if statement and a comparison operator, create code that will check if Amy and Brittani were born in the same year. If they were, console.log 'Amy & Brittani were born in the same year'. If they were not, console.log 'Amy & Brittani were not born in the same year'
*/

if (amysBirthYear === brittanisBirthYear) {
  console.log ('Amy & Brittani were born in the same year')
}
else {
  console.log('Amy & Brittani were not born in the same year')
}

////////// PROBLEM 4 //////////

let temperature = 55
let rain = true

/*
  Using an if statement and a comparison operator, create code that will log a suggestion on what type of clothes one should wear for the day, based on the above temperature and rain.
  If it is 80 degrees or above, and raining, one should wear a t-shirt and take an umbrella. If it is between 60 and 80 degrees, and raining, one should wear a rain-jacket. If it is 60 degrees or below, one should wear a jacket and carry an umbrella. Come up with your own clothing suggestions based on those temperature parameters when it is not raining.
*/

if (temperature >= 80 && rain) {
  console.log ('Wear a t-shirt and take an umbrella.')
}
else if (temperature >  60 && temperature <  80 && rain ) {
  console.log ('Wear a rain-jacket.')
}
else if (temperature <= 60 && rain ) {
  console.log ('Wear a jacket and carry an umbrella.')
}
else if (temperature <= 60 && !rain ) {
  console.log ('Wear a coat.')
}
else if (temperature > 60 && temperature < 80 && !rain ) {
  console.log ('Wear pants and a t-shirt.')
}
else if (temperature > 80 && !rain ) {
  console.log ('Wear shorts and a t-shirt.')
}


////////// PROBLEM 5 //////////

/*
  Create a for-loop that runs 10 times, and on each iteration logs the word 'hello'.
*/

for ( i = 0; i < 10; i++) {
  console.log('Hello!')
}


////////// PROBLEM 6 //////////

/*
  Create a for-loop that runs 10 times, logging the numbers 1 through 10. Ex, on the first iteration it would log 1, on the second iteration it would log 2.
*/

for (i = 1; i < 11; i++) {
  console.log(i)
}


////////// PROBLEM 7 //////////

/*
  Create a for-loop that logs the numbers 0 through 10 backwards. Ex, on the first iteration it would log 10, on the second iteration it would log 9.
*/

for (i = 10; i > -1; i--) {
  console.log (i)
}

let score = 0
let passingScore = 7

////////// PROBLEM 8 //////////

/*
  Create a while-loop that logs "Your score is not high enough" while the score variable above is below passingScore. In each iteration of the loop, increase the score by one. If your code is successful, you will see your logged statement 7 times.
*/

for (score = 0; score < passingScore; score++) {
  console.log('Your score is not high enough')
}

////////// INTERMEDIATE PROBLEMS //////////

////////// PROBLEM 9 //////////
/*
  Create a variable called 'changeMyMind' and set it equal to true. 
  Check to see if changeMyMind is set to true or false, if it is true, change the status to false, if it is false, change the status to true.

*/

let changeMyMind = true

if (changeMyMind === true) {
  changeMyMind = false 
} 
else {
  changeMyMind = true
}

////////// PROBLEM 10 //////////
// Try to change the value of changeMyMind (irrespective of whether it is true or false) and then console.log it's new status. It should log true. Hint: use the not operator.

if (changeMyMind = !changeMyMind){
changeMyMind = true }
console.log(changeMyMind)



////////// ADVANCED PROBLEMS //////////

////////// PROBLEM 11 //////////

let z = 5
// Create a while loop that continues to run while z is greater than 0. Within the while loop, log a countdown from the value of z to 1. Once you have logged the countdown, make sure you decrement z by 1. If your code is running properly, you should see: 5,4,3,2,1,4,3,2,1,3,2,1,2,1,1.

while (z > 0) {
  for (let i =z; i > 0; i--){
    console.log(i)
  }
  z--
}