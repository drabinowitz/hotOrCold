$(document).ready(function(){

	var newGame100 = newGame(100);

	newGame100.resetGame();

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});

var newGame = function(val){

	var secretNumber;

	return {

		returnNum: function(){

			return secretNumber;

		},

		resetGame: function(){

			secretNumber = Math.ceil(Math.random()*val);

			$('#count').text() = 0;

			$('#feedback').text() = "Make your Guess!";

		}

	}

};


var feedback = function(input,secretNumber){

	var checkVal = function(){


	
	}

	var prevVal = +$('#feedback');

	if ( !(input - secretNumber) ){

		alert('You Won!');

	} else if( prevVal ){



	}

}