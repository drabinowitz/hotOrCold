var game = (function() {

	var secretNumber;

	function editDOM( feedbackText ){

		$('#feedback').text( feedbackText );

		$('#count').text( +$('#count').text() + 1 );

		$('#guessList').append(

			$('<li>').append( $('#userGuess').val() )

		);

	}

	return {

		scale: 100,

		input: 0,

		inputPrev: 0,

		newGame: function(val){

			secretNumber = Math.ceil(Math.random()*val);

			game.scale = val;

			game.input = 0;

			game.inputPrev = undefined;

			$('#userGuess').val("");

			$('#count').text( 0 );

			$('#feedback').text( "Make your Guess!" );

			$('#guessList li').remove();

		},

		getFeedback: function(){

			game.input = $('#userGuess').val();

			if ( input.isValid( game.input,1,game.scale ) ){

				var guessResult = feedback.returnResult( input.compareVal( secretNumber, game.input, game.inputPrev ) );

				if ( guessResult.success ){

					alert('you won!');

					game.newGame(game.scale);

				} else {

					editDOM( guessResult.hint );

					game.inputPrev = game.input;

				}

			} else {

				alert('please enter a new whole number between 1 and ' + game.scale);

			}

		}

	};

})();