const solution = require('../candidate-testing');

describe("Candidate Testing solution", function() {

	// PART 1 // 
	// candidateName tests //
	it("Data type of candidateName is string", function() {
		expect(typeof solution.candidateName).toBe("string");
	});

  // question tests //
	it("Data type of question is string", function() {
		expect(typeof solution.question).toBe("string");
	});

  it("Correct question asked to user", function() {
		expect(solution.question).toBe("Who was the first American woman in space? ");
	});

  // correctAnswer tests //
	it("Data type of correctAnswer is string", function() {
		expect(typeof solution.correctAnswer).toBe("string");
	});

  it("correctAnswer gives the correct answer", function() {
		expect(solution.correctAnswer).toBe("Sally Ride");
	});

  // candidateAnswer tests //
	it("Data type of candidateAnswer is string", function() {
		expect(typeof solution.candidateAnswer).toBe("string");
	});

  // PART 2 // 
  // questions tests //
	it("questions array contains 5 questions", function() {
		expect(solution.questions.length).toBe(5);
	});

  it("questions contained in questions array end with a trailing space", function() {
		expect(solution.questions).toContain("Who was the first American woman in space? ");
    expect(solution.questions).toContain("True or false: 5 kilometer == 5000 meters? ");
    expect(solution.questions).toContain("(5 + 3)/2 * 10 = ? ");
    expect(solution.questions).toContain("Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ");
    expect(solution.questions).toContain("What is the minimum crew size for the ISS? ");
	});

  // correctAnswers tests //
	it("correctAnswers array contains 5 answers", function() {
		expect(solution.correctAnswers.length).toBe(5);
	});

  it("correctAnswers Array contains the correct answers", function() {
		expect(solution.correctAnswers).toContain("Sally Ride");
    expect(solution.correctAnswers).toContain("true");
    expect(solution.correctAnswers).toContain("40");
    expect(solution.correctAnswers).toContain("Trajectory");
    expect(solution.correctAnswers).toContain("3");
	});

  // PART 3 //
  // gradeQuiz tests //
  it("gradeQuiz returns a 0 for all wrong answers", function() {
    solution.candidateAnswers = ["foo", "bar", "baz", "lur", "man"];
    expect(solution.gradeQuiz(solution.candidateAnswers)).toBe(0);
	});

  it("gradeQuiz returns 100 for all correct answers", function() {
    solution.candidateAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
    expect(solution.gradeQuiz(solution.candidateAnswers)).toBe(100);
	});

  it("gradeQuiz returns 20 for a single correct answer", function() {
    solution.candidateAnswers = ["Sally Ride", "bar", "baz", "lur", "man"];
    expect(solution.gradeQuiz(solution.candidateAnswers)).toBe(20);
	});

  it("gradeQuiz returns 40 for two correct answers", function() {
    solution.candidateAnswers = ["Sally Ride", "bar", "baz", "lur", "3"];
    expect(solution.gradeQuiz(solution.candidateAnswers)).toBe(40);
	});

  it("gradeQuiz returns 60 for three correct answers", function() {
    solution.candidateAnswers = ["Sally Ride", "bar", "40", "lur", "3"];
    expect(solution.gradeQuiz(solution.candidateAnswers)).toBe(60);
	});

  it("gradeQuiz returns 80 for four correct answers", function() {
    solution.candidateAnswers = ["Sally Ride", "bar", "40", "Trajectory", "3"];
    expect(solution.gradeQuiz(solution.candidateAnswers)).toBe(80);
	});

  it("gradeQuiz is case insensitive", function() {
    solution.candidateAnswers = ["sally ride", "TRUE", "40", "TrAjEcToRy", "3"];
    expect(solution.gradeQuiz(solution.candidateAnswers)).toBe(100);
	});
 
 });