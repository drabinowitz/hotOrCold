var input = (function() {

	return {

		isValid: function(inputVal,gameMin,gameMax){

			if ( +inputVal && !( inputVal - Math.floor(inputVal) ) && inputVal >= gameMin && inputVal <= gameMax ){

				return true;

			} else {

				return false;

			}

		},

		compareVal: function(target,inputVal,prevVal){

			var difference = Math.abs( inputVal - target );

			if ( typeof prevVal != 'undefined' ){

				return {

					difference: difference,

					progress: ( difference - Math.abs( prevVal - target ) ) < 0 ? true : false

				};

			} else {

				return {

					difference: difference

				};

			}

		}

	};

})();