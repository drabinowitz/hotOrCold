var feedback = (function(){

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

	return {

		returnResult: function (lookup){

			if ( lookup.difference == 0 ){

				return {

					success: true

				};

			} 

			var hintAbsolute = Math.ceil ( lookup.difference * ( hints[0].length / game.scale ) );

			if ( lookup.hasOwnProperty( 'progress' ) ){

				var hintChange = lookup.progress ? 0 : 1;

				var hintConjunction = Math.round( ( hintAbsolute - 0.5 ) / hints[0].length ) == hintChange ? 0 : 1;

				return {

					success: false,

					hint: hints[0][ hintAbsolute - 1 ] + hints[1][ hintConjunction ] + hints[2][ hintChange ]

				};

			} else {

				return { 

					success: false,

					hint: hints[0][ hintAbsolute - 1 ]

				};

			}

		}

	};

})();