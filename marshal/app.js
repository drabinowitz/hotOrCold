$(document).ready(function(){

	game.newGame(100);

	$('#guessButton').on('click',game.getFeedback);

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

    $('.new').on('click',function(){

      game.newGame.call(this,100);

    });

});