/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying, landedSix, winningScore, diceDOM, dice2DOM;
diceDOM = document.querySelector('.dice');
dice2DOM = document.querySelector('.dice2');
winningScore = 100;


init();

document.querySelector('.btn-roll').addEventListener('click', function() { 
	if (gamePlaying) {
		// 1. Random Number
		var dices = [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1]
		// 2. Display the result	
		if (diceDOM.style.display === 'none') {
			toggleDices();
		}

		diceDOM.src = 'dice-' + dices[0] + '.png';
		dice2DOM.src = 'dice-' + dices[1] + '.png';
		var playerChanged = false;
		// 3. Update the round score IF the rooled number was NOT a 1
		if (landedSix && dices.indexOf(6) !== -1)
		{								
			scores[activePlayer] = 0;
			document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
			nextPlayer();
			playerChanged = true;
		}
		else if (dices.indexOf(1) === -1) {										
			roundScore += dices[0] + dices[1];
			document.querySelector('#current-' + activePlayer).textContent = roundScore;						
		}
		else {			
			nextPlayer();
			playerChanged = true;
		}
		if (!playerChanged) {
			landedSix = dices.indexOf(6) !== -1 ? true : false;			
		}
	}
});

document.querySelector('.btn-hold').addEventListener('click', function() {
	if (gamePlaying) {
		// Add CURRENT score to GLOBAL score
		scores[activePlayer] += roundScore;
		
		// Update the UI
		document.getElementById('score-'+ activePlayer).textContent = scores[activePlayer];

		// Check if player won the game
		if (scores[activePlayer] >= winningScore ){		
			document.getElementById('name-' + activePlayer).textContent = 'Winner!';
			toggleDices();
			document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
			document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
			gamePlaying = false;
		}
		else {
			//Next Player
			nextPlayer();
		}
	}
});

function nextPlayer() {	
	//activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;			
	activePlayer = activePlayer === 0 ? 1 : 0;
	roundScore = 0;
	landedSix = false;

	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';	
	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');
	toggleDices();
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
	scores = [0,0];
	roundScore = 0;
	activePlayer = 0;
	landedSix = false;

	//document.querySelector('.dice').style.display = 'none';
	toggleDices();
	//toggleDices();

	document.getElementById('score-0').textContent = 0;
	document.getElementById('score-1').textContent = 0;
	document.getElementById('current-0').textContent = 0;
	document.getElementById('current-1').textContent = 0;
	document.getElementById('name-0').textContent = 'Player 1';
	document.getElementById('name-1').textContent = 'Player 2';
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('active');
	gamePlaying = true;

}

document.querySelector('.btn-set').addEventListener('click', function(){
	var scoreInputDOM = document.getElementById('score-input');
	var inputValue = Number(scoreInputDOM.value);		
	if (isNaN(inputValue)) {
		alert('Please input a valid number')
	}
	else {
		winningScore = inputValue;	
	}
	scoreInputDOM.value = '';
})

function toggleDices() {
	diceDOM.style.display = diceDOM.style.display === 'none' ? 'block' : 'none'
	dice2DOM.style.display = dice2DOM.style.display === 'none' ? 'block' : 'none'
}


/*
1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable.)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with 
   the .value property in JavaScript. This is a good oportunity to use google to figure this out :) )
3. Add another dice to the game, so that there are two dices now. The player looses his current socre when one of them is a 1. (Hint: you will need CSS to position the 
   second cie, so take a look at the CSS code for the first one.)   
*/