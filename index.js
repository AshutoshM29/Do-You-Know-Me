var readlineSync = require('readline-sync');

var score = 0;


console.log("Namaste" + "\n");

var userName = readlineSync.question("What is your name ? " + "\n")

console.log("-------------------------");

console.log("Welcome " + userName + " to " + "DO YOU KNOW ASHU ?" + "\n");

console.log("-------------------------");

function play(question,answer)
{var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase())
  {console.log("You are right! ")
  score = score + 1}

  else {console.log("You are wrong! ")
    }
    
    console.log("Your current score is : " + score);
    console.log("-------------------------");
    
    }


var questionOne = {
  question : "Where do Ashu live ? ",
  answer : "Nagpur",
}

var questionTwo = {
  question : "What is Ashu's favourite Sport ? ",
  answer : "Football",
}

var questionThree = {
  question : "Who is Ashu's favourite Superhero ? ",
  answer : "Ironman",
}

var questionFour = {
  question : "What is Ashu's favourite Color ? ",
  answer : "Midnight Blue",
}

var questionFive = {
  question : "What is Ashu's favourite Food ? ",
  answer : "Pizza",
}

var quiz = [questionOne, questionTwo, questionThree, questionFour, questionFive]

for (var i=0 ; i<quiz.length ; i++)
{ var currentQuestion = quiz[i];
  play(currentQuestion.question, currentQuestion.answer)
}

console.log(userName + " your final score is : " + score);


console.log("-------------------------")
 console.log("**LEADERBOARD**" + "\n")

var highScore = [
  {name : "ASHU",
  score : 5,},
  {name : "RUDRA",
  score : 4,},
]

for (var j=0 ; j<highScore.length ; j++)
{var currentHighScore = highScore[j]
  console.log(currentHighScore.name + " : " + currentHighScore.score + "\n");
}

console.log("If you have beaten the highscore, send me the screenshot of it and I'll update the LEADERBOARD." + "\n");
console.log("Thank you " + userName + "for playing the quiz.");