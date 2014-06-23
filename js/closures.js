/*var newGame = (function() {

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

	};

})();*/


/*var feedback = (function(){

	var secretNumber;

	var difference = 0;

	var differencePrev;

	return {

		passSecretNumber: function(passedNumber){

			secretNumber = passedNumber;

		},

		checkVal: function(input){

			if ( !+input || ( input - Math.floor(input) ) || input < 1 || input > gameScale ){

				alert('this is not a valid input, please input an integer from 1 to ' + gameScale + '!');

				difference = -1;

			}

			differencePrev = difference;

			difference = Math.ceil( Math.abs( input - secretNumber ) / 25;

		},

		returnResult: function(){

			if ( difference ){



				switch( difference ) {

					case 4:



				}

			} else {

				alert('you won!');

				newGame.resetGame(gameScale);

			}

		}

	}*/

/*	var prevVal = +$('#feedback');

	if ( !(input - secretNumber) ){

		alert('You Won!');

	} else if( prevVal ){



	}

})(); */