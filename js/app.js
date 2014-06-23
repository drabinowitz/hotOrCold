/*var gameScale;*/

$(document).ready(function(){

	var game = (function() {

		var secretNumber;

		return {

			scale: 100,

			input: 0,

			inputPrev: 0,

			newGame: function(val){

				secretNumber = Math.ceil(Math.random()*val);

				game.scale = val;

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

		var returnResult = function (){

				if ( difference ){

					$('#count').text( +$('#count').text() + 1 );

					$('#guessList').append(

						$('<li>').append( $('#userGuess').val() )

					);

					$('#feedback').text( hints[difference - 1] );

				} else {

					alert('you won!');

					game.newGame(game.scale);

				}

			}

		return {

			passSecretNumber: function(passedNumber){

				secretNumber = passedNumber;

			},

			get: function(){

				game.input = $('#userGuess').val();

				if(feedback.checkVal() && feedback.compareVal()){

					returnResult();

				}

			},

			checkVal: function(){

				if ( !+game.input || ( game.input - Math.floor(game.input) ) || game.input < 1 || game.input > game.scale ){

					return 0;

				} else {

					difference = Math.ceil( Math.abs( game.input - secretNumber ) / hints.length);

					return 1;

				}

			},

			compareVal: function(){

				return 1;

			}

		};

	})();

	game.newGame(100);

	$('#guessButton').on('click',feedback.get);

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});