(function($) {


	$(function() {

        $(window).on('load', function () {
			$(".loader").fadeOut();
			$("#preloder").delay(200).fadeOut("slow");
        });
		
		var	$window = $(window),
			$body = $('body'),
			$header = $('#header');
			
		$('#menu')
			.append('<a href="#menu" style="width: 80px;" class="close"></a>')
			.appendTo($body)
			.panel({
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'right'
			});

	});
	
	$.fn.panel = function(userConfig) {
	
			var	$this = $(this),
				$body = $('body'),
				$window = $(window),
				id = $this.attr('id'),
				config;

			config = $.extend({
					delay: 0,
					hideOnClick: false,
					hideOnEscape: false,
					hideOnSwipe: false,
					resetScroll: false,
					resetForms: false,
					side: null,
					target: $this,
					visibleClass: 'visible'
			}, userConfig);

			$body.on('click', 'a[href="#' + id + '"]', function(event) {
				event.preventDefault();
				event.stopPropagation();
				config.target.toggleClass(config.visibleClass);
			});

		return $this;

	};

})(jQuery);