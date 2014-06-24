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

				" and ",

				" but ",

				""

			],

			[

				"Hotter than last guess",

				"Colder than last guess",

				""

			]

		];

		var progress;

		return {

			passSecretNumber: function(passedNumber){

				secretNumber = passedNumber;

			},

			get: function(){

				game.input = $('#userGuess').val();

				feedback.returnResult( feedback.checkVal(game.input,game.inputPrev) );

			},

			checkVal: function(inputVal,prevVal){

				var difference = Math.ceil( Math.abs( inputVal - secretNumber ) / hints[0].length);

				if ( !+inputVal || ( inputVal - Math.floor(inputVal) ) || inputVal < 1 || inputVal > game.scale || inputVal == prevVal){

					return false;

				} else if (!prevVal) {

					return [difference,2,2];

				} else {

					var progress = (Math.abs( inputVal - secretNumber ) - Math.abs( prevVal - secretNumber )) <= 0 ? 0 : 1;

					return [

						difference,

						Math.round( ( difference - 0.5 ) / hints[0].length ) == progress ? 0 : 1,

						progress

					];

				}

			},

			returnResult: function (difference){

				if ( difference[0] ){

					$('#count').text( +$('#count').text() + 1 );

					$('#guessList').append(

						$('<li>').append( $('#userGuess').val() )

					);

					$('#feedback').text( 

						hints[0][difference[0] - 1] +

						hints[1][difference[1]] +

						hints[2][difference[2]]

					);

					game.inputPrev = game.input;

				} else if (difference[0] == 0) {

					alert('you won!');

					game.newGame(game.scale);

				} else {

					alert('please enter a new whole number between 1 and ' + game.scale);

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