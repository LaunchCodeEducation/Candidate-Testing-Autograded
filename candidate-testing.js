const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName;
candidateName = (" ");
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question;
question = ("Who was the first American woman in space? ");
// = [
//    "1. Who was the first American woman in space? ",
//    '2. True or false: 5 kilometer === 5000 meters?',
//    "3. (5+3)/2 * 10 = ?",
//    "4. Give the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?",
//    "5. What is the minimum crew size for the ISS?"
//];

let correctAnswer;
correctAnswer = ("Sally Ride" );
// = [
//    "1. Sally Ride",
//    "2. true",
//    "3. 40",
//    "4. Trajectory",
//    "5. 3"
//];

let candidateAnswer;
candidateAnswer =(" ");



//TODO: Variables for Part 2
let questions;
let correctAnswers;
let candidateAnswers;


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  let candidateName = input.askForName("Enter your name: ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  let question = prompt(question);
  candidateAnswer = input.answer("Enter your answer: ");
}
  //let askQuestion = [
   // "1. Who was the first American woman in space? "
    //"2. True or false: 5 kilometer === 5000 meters?",
   // "3. (5+3)/2 * 10 = ?",
   // "4. Give the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?",
   // "5. What is the minimum crew size for the ISS?"
  //];
  //for (let i = 0; i < askQuestion.length; i++) {
   // console.log(askQuestion[i]);
  //}
//}
function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  if(candidateAnswers=="Sally Ride"){
    alert("correct");  
    return;
  }
    alert("incorrect");


  let grade;  //TODO 3.2 use this variable to calculate the candidates score.


  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log("Hi " + candidateName + "!");
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