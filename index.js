// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 *  Counter1 function has another function nested inside
 *  counter2 uses less lines of code and has the variable for count on a global scope
 * 
 * 2. Which of the two uses a closure? How can you tell?
 *  Counter1 is the one that uses a closure, how i was able to tell is because it has a variable in the closure
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * 
 * Counter2 would be better if you wanted to be able to use the variable count with other functions, counter1 would be preferred if you wanted the variables you used to stay within its own scope
 * 
*/
// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
  return Math.round((Math.random() * 2) + 0);
}
console.log("Task 2", inning());


/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(numInnings, inningFunction){
  let homeTeam = 0;
  let awayTeam = 0;
  for (let i = 0; i < numInnings; i++){
    homeTeam = homeTeam + inning();
    awayTeam = awayTeam + inning();
  }
  return {"Home": homeTeam, "Away": awayTeam};
}
console.log("Task 3", finalScore(10, inning()));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `inning` that you wrote above
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: 0 - 2
2nd inning: 1 - 3
3rd inning: 1 - 3
4th inning: 2 - 4
5th inning: 4 - 6
6th inning: 4 - 6
7th inning: 4 - 6
8th inning: 5 - 8
9th inning: 6 - 10

Final Score: 6 - 10 */

function scoreboard(numInnings, inningScoreFunction, inningFunction) {
  const results = [];
  const final = {"Home": 0, "Away": 0};
  for (let i = 0; i < numInnings; i++){
    const obj = Object.assign({ "inning": i + 1}, inningScoreFunction(1, inningFunction));
    results.push('Inning ${obj.inning}: ${final.Home} - ${final.Away}');
    final["Home"] += obj.Home;
    final["Away"] += obj.Away;
  }
  results.push('Final Score: ${final.Home} - ${final.Away}');
  return results;
}


