const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName="";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question="Who was the first American woman in space? "
let correctAnswer='Sally Ride';
let candidateAnswer="";

//TODO: Variables for Part 2
let questions=["Who was the first American woman in space? ",
              "True or false: 5 kilometer == 5000 meters? ",
              "(5 + 3)/2 * 10 = ? ",
              "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
              "What is the minimum crew size for the ISS? " ];;
let correctAnswers=['Sally Ride', 'true', '40', 'Trajectory', '3' ];
let candidateAnswers = [];
let i;


function askForName() 
{
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Enter Candidate Name : ");  
}

function askQuestion() 
{
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  //const input = require('readline-sync');
  for (i=0;i<questions.length;i++)
  {
    candidateAnswers[i] = input.question(questions[i]);
  }
  
}

function gradeQuiz(candidateAnswers) 
{
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or 
  //incorrectly  
  let grade=0;  //TODO 3.2 use this variable to calculate the candidates score.
  let count =0;
  console.log("************************************");
  for (i=0;i<correctAnswers.length;i++)
  {
      if (candidateAnswers[i].toLowerCase()===correctAnswers[i].toLowerCase())
      {
        count+=1;
        console.log(`Question : ${questions[i]}
Your Answer : ${correctAnswers[i]}
Correct Answer : ${candidateAnswers[i]}`);
      }
      else
      {
        console.log(`Question : ${questions[i]} 
Your Answer : ${candidateAnswers[i]}
Correct Answevr : ${correctAnswers[i]}`);
      }
  }
  grade = (count/correctAnswers.length) * 100;
  console.log("Total Grade : " +grade);
  
  return grade;
}

function runProgram() 
{
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log("Welcome " + candidateName + "!");
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