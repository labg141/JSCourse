
(function () {
	var Question = function (question, answers, correctAnswer){
		this.question = question,
		this.answers = answers,
		this.correctAnswer = correctAnswer;		
	};

	Question.prototype.displayQuestion = function(){
		console.log(this.question);
		
		for (var i = 0; i < this.answers.length; i++) {
			console.log(i + ' : ' + this.answers[i]);
		}	
		console.log('----------------------------------');	
	};
	Question.prototype.checkAnswer = function(answer){
		if (answer === this.correctAnswer) {
			console.log('Correct!');
		}
		else {
			console.log('Incorrect! Try again :)');
		}
	};

	var q1 = new Question('What\'s the game developer name?' , ['John','Luis','Mary','Mike'], 1 );
	var q2 = new Question('Which one of this is a girl name?', ['Mike', 'Alphonse', 'Anna', 'Steve'], 2);
	var q3 = new Question('Where do i live?', ['USA','Canada', 'Japan', 'Mexico'], 3);

	var questions = [q1, q2, q3];

	var questionNumber = Math.floor(Math.random() * questions.length);		
	var selectedQuestion = questions[questionNumber];

	selectedQuestion.displayQuestion();
	selectedQuestion.checkAnswer(getAnswer());

	function getAnswer() {
		var inputText = Number(prompt('Write your answer here: '));
		if (isNaN(inputText)){
			alert('Please write a number');
			inputText = getAnswer();
		}
		return inputText;
		
	}
})();
