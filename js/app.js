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

		var difference;

		return {

			passSecretNumber: function(passedNumber){

				secretNumber = passedNumber;

			},

			checkVal: function(input){

				if ( !+input || ( input - Math.floor(input) ) || input < 1 || input > gameScale ){

					alert('this is not a valid input, please input an integer from 1 to ' + gameScale + '!');

				} else {

					difference = Math.ceil( Math.abs( input - secretNumber ) / hints.length);

					feedback.returnResult();

				}

			},

			returnResult: function (){

				if ( difference ){

					$('#count').text( +$('#count').text() + 1 );

					$('#guessList').append(

						$('<li>').append( $('#userGuess').val() )

					);

					$('#feedback').text( hints[difference - 1] );

				} else {

					alert('you won!');

					newGame.resetGame(gameScale);

				}

			}

		};

	})();

	newGame.resetGame(100);

	$('#guessButton').on('click',function(){

		feedback.checkVal( $('#userGuess').val() )

	});

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});