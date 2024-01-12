const input = require('readline-sync');

// TODO 1.1a: Define candidateName //
let candidateName;

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question;
let correctAnswer;
let candidateAnswer;

//TODO: Variables for Part 2
let questions = [
  "Who's Michael Jackson'?",
  "True or false: 1000 miles = 5 kilometers.",
  "How old am I?",
  'Given the array [8, "Orbit", "Trajectory", 45], what entry is at index 2?',
  "How many people live in my house?"
];

let correctAnswers = [
  "Singer",
  "false",
  "25",
  "Trajectory",
  "2"
];

let candidateAnswers = [];

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("What is your name? ");
}

function askQuestion() {
  for (let i = 0; i < questions.length; i++) {
    candidateAnswer = input.question(questions[i] + " ");
    candidateAnswers.push(candidateAnswer);
    console.log(`Your Answer: ${candidateAnswer}\nCorrect Answer: ${correctAnswers[i]}\n`);
    console.log(); // Add a line break
  }
}

function gradeQuiz(candidateAnswers) {
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly //
  let correctCount = 0;

  for (let i = 0; i < candidateAnswers.length; i++) {
    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
      correctCount++;
    }
  }

  let grade = (correctCount / questions.length) * 100;

  console.log(`>>> Overall Grade: ${grade}% (${correctCount} of ${questions.length} responses correct) <<<`);
  console.log(grade >= 80 ? ">>> Status: PASSED <<<" : ">>> Status: FAILED <<<");

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
  console.log(`Hello, ${candidateName}!\n`);
  askQuestion();
  gradeQuiz(candidateAnswers);
}

runProgram();
