/*
	Miniport by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav'),
		$top = $('#top'),
		$work = $('#work');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('#nav a, .scrolly').scrolly({
			speed: 1000,
			offset: function() { return $nav.height(); }
		});

	// Top.
	if ($top.length > 0) {

		// Hack: Fix flex min-height on IE.
			if (browser.name == 'ie') {
				$window.on('resize.ie-top-fix', function() {

					var h = $top.height();

					if (h > $window.height())
						$top.css('height', 'auto');
					else
						$top.css('height', h);

				}).trigger('resize.ie-top-fix');
			}

		// Hide top on scroll (> small).
			breakpoints.on('>small', function() {

				$top.unscrollex();

				$top.scrollex({
					mode: 'bottom',
					top: '35vh',
					bottom: '-50vh',
					enter: function() {
						$top.removeClass('hidden');
					},
					leave: function() {
						$top.addClass('hidden');
					}
				});

			});

		// Hide top on scroll (<= small).
			breakpoints.on('<=small', function() {

				$top.unscrollex();

				$top.scrollex({
					mode: 'middle',
					top: '15vh',
					bottom: '-15vh',
					enter: function() {
						$top.removeClass('hidden');
					},
					leave: function() {
						$top.addClass('hidden');
					}
				});

		});

	}

	// Scrollex for work images
	$work.scrollex({
		scroll: function(progress) {
	
		  // Progressively increase #foobar's opacity as we scroll through it.
			$(this).css('opacity', Math.max(0, Math.min(1, progress +0.5)));
	
		}
	  });

})(jQuery);