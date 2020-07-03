$(document).ready(function(){
    
var magic8Ball = {};
magic8Ball.listOfAnswers = ["Please try again later", "Well you really shouldn't be asking me about this", "Oh, Yes definitely!", "No, definitely not!"];

// define the method
magic8Ball.response = function(question) {
	// create a random number
	var randomNumber = Math.random();
	// make the random number between 0 and the number of items in your array
	var randomNumberArray = randomNumber * this.listOfAnswers.length;
 	// round down the number to be a whole number
	var randomIndex = Math.floor(randomNumberArray);
	// use that number to index a random number from the answers array
	var randomAnswer = this.listOfAnswers[randomIndex];
	//console out the question with the chosen answer
	console.log(question + ": " + randomAnswer);
};
// run the funciton/method to output the response
// magic8Ball.response("Will it rain today?");

});