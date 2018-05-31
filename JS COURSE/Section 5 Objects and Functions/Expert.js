
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
	Question.prototype.checkAnswer = function(answer, callback){
		var sc;
		if (answer === this.correctAnswer) {
			console.log('Correct!');
			sc = callback(true);
		}
		else {
			console.log('Incorrect! Try again :)');
			sc = callback(false);
		}

		this.displayScore(sc);
		
	};

	Question.prototype.displayScore = function(score){
		console.log('Your current score is: ' + score);
		console.log('----------------------------------')
	};

	var q1 = new Question('What\'s the game developer name?' , ['John','Luis','Mary','Mike'], 1 );
	var q2 = new Question('Which one of this is a girl name?', ['Mike', 'Alphonse', 'Anna', 'Steve'], 2);
	var q3 = new Question('Where do i live?', ['USA','Canada', 'Japan', 'Mexico'], 3);
	var questions = [q1, q2, q3];	
	var keepScore = score();
	nextQuestion();	

	function score() {
		var sc = 0;
		return function(correct) {
			if (correct) {				
				sc++;
			}
			return sc;			
		}
	}

	function nextQuestion(){	
		var questionNumber = Math.floor(Math.random() * questions.length);		
		var selectedQuestion = questions[questionNumber];

		selectedQuestion.displayQuestion();
		var answer = getAnswer();
		if (answer !== 'exit') {			
			selectedQuestion.checkAnswer(answer, keepScore);		 	
			nextQuestion();
		}		
	}

	function getAnswer() {
			var inputText = prompt('Write your answer here: ');
			if (isNaN(inputText) && inputText !== 'exit'){
				alert('Please write a number');
				inputText = getAnswer();
			}
			inputText = inputText === 'exit' ? inputText : Number(inputText);
			return inputText;
			
	}		
})();
