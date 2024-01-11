const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //
let questions = [
  {question : "What is the best car to drive?"},
  {question : "What is your birthdate?"},
  {question : "Do you like snow?"},
  {question : "What is today's date?"},
  {question : "How many days are in a week?"}, 
];

// TODO 1.1a: Define candidateName // 
let candidateName = "";

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let questions = [
  {question: "Who was the first American woman in space? ", correctAnswer: "Sally Ride "},
  {question: "What is your birthdate? ", correctAnswer: "9/13/1973 "},
  {question: "Do you like snow? ", correctAnswer: "Yes/No"},
  {question: "What is today's date? ", correctAnswer: "The day after yesterday. "},
  {question: "How many days are in a week? ", correctAnswer: " 7 "}, 
];
let candidateAnswer = [];




//TODO: Variables for Part 2
let questions;
let correctAnswers;
let candidateAnswers;


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
var candidateName = input.question("What is your name?");
candidateName = " ";
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
candidateAnswer = prompt(question);
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
if (candidateAnswer === correctAnswer) {
  console.log("you got it!");
}else {
  console.log("sorry, that's wrong. The correct answer is " + correctAnswer + "." );
}


  let grade;  //TODO 3.2 use this variable to calculate the candidates score.


  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
  console.log("Hello, " + candidateName + "!");
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};