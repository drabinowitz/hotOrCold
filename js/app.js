var gameScale;

$(document).ready(function(){

	newGame.resetGame(100);

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});

var newGame = (function(){

	var secretNumber;

	return {

		returnNum: function(){

			return secretNumber;

		},

		resetGame: function(val){

			secretNumber = Math.ceil(Math.random()*val);

			gameScale = val;

			feedback.passSecretNumber(secretNumber);

			$('#count').text() = 0;

			$('#feedback').text() = "Make your Guess!";

		}

	}

})();


var feedback = (function(){

	var secretNumber;

	var difference = 0;

	var differencePrev;

	return {

		passSecretNumber: function(passedNumber){

			secretNumber = passedNumber;

		},

		checkVal: function(input){

			if ( !+input || ( input - Math.floor(input) ) || input < 1 || input > gameScale ){

				return -1;

			}

			differencePrev = difference;

			difference = Math.abs( input - secretNumber );

			if ( difference > 50 )

		}

	}

	var prevVal = +$('#feedback');

	if ( !(input - secretNumber) ){

		alert('You Won!');

	} else if( prevVal ){



	}

})();