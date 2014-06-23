/*var gameScale;*/

$(document).ready(function(){

	var newGame = (function() {

		var secretNumber;

		return {

			returnNum: function(){

				return secretNumber;

			},

			resetGame: function(val){

				secretNumber = Math.ceil(Math.random()*val);

				gameScale = val;

				feedback.passSecretNumber(secretNumber);

				$('#userGuess').val("");

				$('#count').text( 0 );

				$('#feedback').text( "Make your Guess!" );

				$('#guessList li').remove();

			}

		};

	})();

	var feedback = (function(){

		var secretNumber;

		var hints = [

			"FIRE! FIRE!",

			"Burning Hot",

			"Hot",

			"Very Warm",

			"Warm",

			"Cool",

			"Cold",

			"Ice Cold",

			"Frozen Solid",

			"ABSOLUTE ZERO!"

		];

		var input;

		var difference = 0;

		var differencePrev;

		function returnResult(){

				if ( difference ){

					$('#count').text( +$('#count').text() + 1 );

					$('#guessList').append(

						$('<li>').append( input )

					);

					$('#feedback').text( hints[difference - 1] );

				} else {

					alert('you won!');

					newGame.resetGame(gameScale);

				}

			}

		return {

			passSecretNumber: function(passedNumber){

				secretNumber = passedNumber;

			},

			checkVal: function(){

				input = $('#userGuess').val();

				if ( !+input || ( input - Math.floor(input) ) || input < 1 || input > gameScale ){

					alert('this is not a valid input, please input an integer from 1 to ' + gameScale + '!');

				} else {

					differencePrev = difference;

					difference = Math.ceil( Math.abs( input - secretNumber ) / hints.length);

					returnResult();

				}

			}

		};

	})();

	newGame.resetGame(100);

	$('#guessButton').on('click',feedback.checkVal);

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});

/*var newGame = (function(){

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

})();*/