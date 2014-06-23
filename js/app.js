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

				game.input = 0;

				game.inputPrev = 0;

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

			[

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

			],

			[

				"Hotter",

				"",

				"Colder"

			]

		];

		var difference;

		var progress;

		var returnResult = function (){

				if ( difference ){

					$('#count').text( +$('#count').text() + 1 );

					$('#guessList').append(

						$('<li>').append( $('#userGuess').val() )

					);

					$('#feedback').text( hints[0][difference - 1] );

					if ( game.inputPrev ){

						if ( Math.round( ( difference - 0.5 ) / hints[0].length) * 2 == progress + 1 ) {

							$('#feedback').text( $('#feedback').text() + ' and ' + hints[1][progress + 1] );

						} else {

							$('#feedback').text( $('#feedback').text() + ' but ' + hints[1][progress + 1] );

						}

					}

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

				if(feedback.checkVal() && feedback.checkPrevVal()){

					returnResult();

					game.inputPrev = game.input;

				} else {

					alert('Please enter a new whole number between 1 and ' + game.scale);

				}

			},

			checkVal: function(){

				if ( !+game.input || ( game.input - Math.floor(game.input) ) || game.input < 1 || game.input > game.scale ){

					return 0;

				} else {

					difference = Math.ceil( Math.abs( game.input - secretNumber ) / hints[0].length);

					return 1;

				}

			},

			checkPrevVal: function(){

				if ( game.inputPrev ){

					progress = Math.abs( game.input - secretNumber ) - Math.abs( game.inputPrev - secretNumber )

					if ( progress ){

						progress = progress > 0 ? 1 : -1;

						return 1;

					} else {

						return 0;

					}

				} else {

					progress = -1;

					return 1;

				}

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