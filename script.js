$(document).ready(function(){
 
	var magic8Ball = {};
	magic8Ball.listOfAnswers = ["Please try again later", "You really should not be asking me about this", "Yes definitely!", "Definitely not!"];
	
	var answerBall = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png";
		
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
		$("#8ball").effect( "shake" );
		$("#answer").text( answerText );
		$("#8ball").hide();
		$("#8ball").attr("src", answerBall);
		$("#8ball").show();
		$("#answer").fadeIn(2000);
		
	};
		
	// run the funciton/method to output the response
	$("#answer").hide();	
	var onClick = function() {
		setTimeout(
		   function() {    
			var question = prompt("ASK A YES/NO QUESTION!");
			magic8Ball.response(question);
			}, 500);   
	};
		
		$("#questionButton").click( onClick );
		
		
	});