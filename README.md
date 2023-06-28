# Candidate-Testing-Autograded-Solution


We have broken this assignment into 3 parts:

  - **Part 1:** You will create a one-question quiz.  This quiz will also ask for the user's name.
 
  - **Part 2:** You will create a 5-question quiz.  You will create a way to store and display questions, correct answers, and user answers.
  
  - **Part 3:** You will compare the user's answers with the correct answer and provide a final score.  The score will also tell the user if they passed or failed.

The starter code contains `TODO` statements to guide you.  Look for them as you work through this assignment.

Part 1 is not part of the final assessment. It is used to create an MVP and work within functions.  

The students do not need to update the function names, parameters, or return statements for any section of this assignment.  

## Assignment Requirements
For this assignment, create a quiz program that meets each of the following conditions:

   1. Use arrays to store 5 quiz questions, the correct answers, and the candidate's answers,
   1. Presents each question to a "candidate" and prompt them for a response,
   1. Does NOT consider case when checking answers,
   1. Includes at least one loop and one conditional,
   1. Uses at least one template literal,
   1. Calculates the candidate's score as a percentage,
   1. Correctly accepts or rejects a candidate based on their percentage.

The output from the program will look similar to the following:

<img width="836" alt="FinalExpectedOutput" src="https://github.com/LaunchCodeEducation/Candidate-Testing-Autograded-Solution/assets/66076696/4d4b2262-f6b9-4d99-8b51-660347dedf70">


## Unit Tests

Instructions for running the unit tests are provided in the textbook.

Even though we are using unit tests to speed up the grading process, it is _CRUCIAL_ that you have your student review their final code with you.  This will help them build skills such as how to talk about code and confidence.

1. Provided with the assignment starter code is a suite of unit tests. These provide a starting point to assess the viability of a student"s solution. 
1. Run the unit tests inside of the submitted repl using the command: ``npm test`` and select the option to run all tests.
1. A passing assignment will have an output of: ``17 specs, 0 failures``.
1. This test suite is designed to give you a quick indication of which of the students' submissions meet the assignment requirements. If the output matches the above, use the section that follows as your guide for what to check in their code.
1. If the number of failures is not zero, use the title of the failing test(s) as a starting point in your evaluation. Provide the student with feedback on what requirement is not met and work with them on a plan and timeline for resubmission.
1. If the number of specs is not ``17``, check that the student has not altered the spec file in any way. If they have, let them know that the unit tests must remain in place in order to receive a passing grade and encourage them to resubmit with an unaltered test suite.
1. A submission cannot be graded on unit tests alone. Use the section below as a guide for what to look for in a student's submission.
 
### Troubleshooting Autograded Assignments

<!-- TODO - link to A0-->
Refer to [Assignment 0](TODO) for help running the autograded tests

#### Student Output Matches the Example, But the Code Failed the Tests

* What does the test actually output say?
* Check for any extra or missing characters such as spaces, new lines, etc.
* Do all variable/method/etc names match what was presented in the textbook?
* Did they run all the tests or the ones for the section in question?
* Did they change a file that the instructions did not direct them to change?
* Do they need a break?

#### The Tests Passed, But Shouldn’t Have

* Does the code actually pass the test(s)?
* If the code is bad, have a student explain their code to you
* Ask for a demo and provide a new test case

#### Common Student Mistakes and How to Address Them

* For this assignment, students are required to write their code inside helper functions. Some students may put the code in the wrong helper function or not put their code inside a function at all leading to issues with running the unit tests. In this case, you may have to make sure that they have read the directions carefully and explain why programmers use helper functions.

## Score work based on the following criteria:


**Appearance:** Does the student's output look similar to the example above?

1. The output should begin with a name, end with the quiz results, and display
   the entered and correct answers.
1. Spacing, capitalization, spelling, etc. are not particularly important, but
   the output should be readable.

**Code check:** Follow the URLs submitted via Canvas to check each student's
work. A quick glance should verify the following:

1. The student's code must use arrays.
1. The student's code must use at least one template literal.
1. The student's code must use a loop.

**Run the code:** Use the 3 answer sets below to check each program.

1. *Case check* - For the first question, entering "trUE", should be reported
   as a correct answer.
1. *Accuracy, Percentage, and Status checks*:

   a. **"trUE", "40", "trajectory", "Sally Ride", "3"**. These answers should
      produce a grade of 100% and a status of "passed".
   b. **"True", "5", "orbit", "Sally ride", "10"**. These answers should produce a
      grade of 40% and a status of "failed".
   c. **"true", "40", "", "sally ride", "3"**. These answers should produce a grade
      of 80% and a status of "passed".

## Feedback and Grades


If a student's work passes the unit test and meets the appearance, code check, and scoring requirements,
assign them a score of 1/1 in Canvas. Next, **provide feedback**. Even successful
code can be improved.

While not technically part of the assignment requirements, you will be an
*IMMENSELY* helpful mentor if you provide feedback on your students' code style
(spacing, variable names, etc). Encourage best practices and point out the
accepted ways to make code more readable or efficient. 

If a student's work misses one or more of the requirements, **provide them with
detailed feedback** about which parts need to be improved. Also, let the student know that they need to make corrections to their assignment before re-submitting.


