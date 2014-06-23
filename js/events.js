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

		var input;

		var difference = 0;

		var differencePrev;

		function returnResult(){

				if ( difference ){

					$('#count').text( +$('#count').text() + 1 );

					$('#guessList').append(

						$('<li>').append( input )

					);

					switch( difference ) {

						case 10:

							$('#feedback').text( "ABSOLUTE ZERO!" );
							break;

						case 9:

							$('#feedback').text( "Frozen Solid" );
							break;

						case 8:

							$('#feedback').text( "Ice Cold" );
							break;

						case 7:

							$('#feedback').text( "Cold" );
							break;

						case 6:

							$('#feedback').text( "Cool" );
							break;

						case 5:

							$('#feedback').text( "Warm" );
							break;

						case 4:

							$('#feedback').text( "Very Warm" );
							break;

						case 3:

							$('#feedback').text( "Hot" );
							break;

						case 2:

							$('#feedback').text( "Burning Hot" );
							break;

						case 1:

							$('#feedback').text( "FIRE! FIRE!" );
							break;

					}

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

					difference = Math.ceil( Math.abs( input - secretNumber ) / 10);

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