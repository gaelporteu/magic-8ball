$(document).ready(function(){
 
	var magic8Ball = {};
	magic8Ball.listOfAnswers = ["Please try again later", "You really should not be asking me about this", "Yes definitely!", "Definitely not!"];
	
		
	// define the method
	magic8Ball.response = function(question) {
		// create a random number
		var randomNumber = Math.random();
		// make the random number between 0 and the number of items in your array
		var randomNumberArray = randomNumber * this.listOfAnswers.length;
		 // round down the number to be a whole number
		var randomIndex = Math.floor(randomNumberArray);
		// use that number to index a random number from the answers array
		var answerText = this.listOfAnswers[randomIndex];
		//console out the question with the chosen answer
		$("#answer").text( answerText );
	};
		
	// run the funciton/method to output the response
	var onClick = function() {
			var question = prompt("ASK A YES/NO QUESTION!");
			magic8Ball.response(question);
	};
		
		$("#questionButton").click( onClick );
		
	});