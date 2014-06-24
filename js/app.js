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

				if ( feedback.isValid( game.input ) ){

					var guessResult = feedback.returnResult( feedback.compareVal(game.input,game.inputPrev) );

					if ( guessResult[0] ){

						alert('you won!');

						game.newGame(game.scale);

					} else {

						$('#count').text( +$('#count').text() + 1 );

						$('#guessList').append(

							$('<li>').append( $('#userGuess').val() )

						);

						$('#feedback').text( guessResult[1] );

						game.inputPrev = game.input;

					}

				} else {

					alert('please enter a new whole number between 1 and ' + game.scale);

				}

			},

			isValid: function(inputVal){

				if ( +inputVal && !( inputVal - Math.floor(inputVal) ) && inputVal >= 1 && inputVal <= game.scale ){

					return true;

				} else {

					return false;

				}

			},

			compareVal: function(inputVal,prevVal){

				var difference = Math.abs( inputVal - secretNumber );

				var progress = (difference - Math.abs( prevVal - secretNumber )) <= 0 ? true : false;

				if (prevVal){

					return [difference,progress];

				} else {

					return [difference];

				}

			},

			returnResult: function (lookup){

				if ( !lookup[0] ){

					return [true];

				} 

				var hintAbsolute = Math.ceil ( lookup[0] * ( hints[0].length / game.scale ) );

				if ( lookup.length > 1 ){

					var hintChange = lookup[1] ? 0 : 1;

					var hintConjunction = Math.round( ( hintAbsolute - 0.5 ) / hints[0].length ) == hintChange ? 0 : 1;

					return [false, hints[0][ hintAbsolute - 1 ] + hints[1][ hintConjunction ] + hints[2][ hintChange ] ];

				} else {

					return [ false, hints[0][ hintAbsolute - 1 ] ];

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