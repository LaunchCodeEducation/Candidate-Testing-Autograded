const solution = require('../candidate-testing');

describe("Candidate Testing solution", function() {

	// PART 1 // 
	// candidateName tests //
	it("Test 1. Data type of candidateName is string", function() {
		expect(typeof solution.candidateName).toBe("string");
	});

  // question tests //
	it("Test 2. Data type of question is string", function() {
		expect(typeof solution.question).toBe("string");
	});

  it("Test 3. Correct question asked to user", function() {
		expect(solution.question).toBe("Who was the first American woman in space? ");
	});

  // correctAnswer tests //
	it("Test 4. Data type of correctAnswer is string", function() {
		expect(typeof solution.correctAnswer).toBe("string");
	});

  it("Test 5. correctAnswer gives the correct answer", function() {
		expect(solution.correctAnswer).toBe("Sally Ride");
	});

  // candidateAnswer tests //
	it("Test 6. Data type of candidateAnswer is string", function() {
		expect(typeof solution.candidateAnswer).toBe("string");
	});

  // PART 2 // 
  // questions tests //
	it("Test 7. questions array contains 5 questions", function() {
		expect(solution.questions.length).toBe(5);
	});

  it("Test 8. questions contained in questions array end with a trailing space", function() {
		expect(solution.questions).toContain("Who was the first American woman in space? ");
    expect(solution.questions).toContain("True or false: 5 kilometer == 5000 meters? ");
    expect(solution.questions).toContain("(5 + 3)/2 * 10 = ? ");
    expect(solution.questions).toContain("Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ");
    expect(solution.questions).toContain("What is the minimum crew size for the ISS? ");
	});

  // correctAnswers tests //
	it("Test 9. correctAnswers array contains 5 answers", function() {
		expect(solution.correctAnswers.length).toBe(5);
	});

  it("Test 10. correctAnswers Array contains the correct answers", function() {
		expect(solution.correctAnswers).toContain("Sally Ride");
    expect(solution.correctAnswers).toContain("true");
    expect(solution.correctAnswers).toContain("40");
    expect(solution.correctAnswers).toContain("Trajectory");
    expect(solution.correctAnswers).toContain("3");
	});

  // PART 3 //
  // gradeQuiz tests //
  it("Test 11. gradeQuiz returns a 0 for all wrong answers", function() {
    solution.candidateAnswers = ["foo", "bar", "baz", "lur", "man"];
    expect(solution.gradeQuiz(solution.candidateAnswers)).toBe(0);
	});

  it("Test 12. gradeQuiz returns 100 for all correct answers", function() {
    solution.candidateAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
    expect(solution.gradeQuiz(solution.candidateAnswers)).toBe(100);
	});

  it("Test 13. gradeQuiz returns 20 for a single correct answer", function() {
    solution.candidateAnswers = ["Sally Ride", "bar", "baz", "lur", "man"];
    expect(solution.gradeQuiz(solution.candidateAnswers)).toBe(20);
	});

  it("Test 14. gradeQuiz returns 40 for two correct answers", function() {
    solution.candidateAnswers = ["Sally Ride", "bar", "baz", "lur", "3"];
    expect(solution.gradeQuiz(solution.candidateAnswers)).toBe(40);
	});

  it("Test 15. gradeQuiz returns 60 for three correct answers", function() {
    solution.candidateAnswers = ["Sally Ride", "bar", "40", "lur", "3"];
    expect(solution.gradeQuiz(solution.candidateAnswers)).toBe(60);
	});

  it("Test 16. gradeQuiz returns 80 for four correct answers", function() {
    solution.candidateAnswers = ["Sally Ride", "bar", "40", "Trajectory", "3"];
    expect(solution.gradeQuiz(solution.candidateAnswers)).toBe(80);
	});

  it("Test 17. gradeQuiz is case insensitive", function() {
    solution.candidateAnswers = ["sally ride", "TRUE", "40", "TrAjEcToRy", "3"];
    expect(solution.gradeQuiz(solution.candidateAnswers)).toBe(100);
	});

	
 
 });
