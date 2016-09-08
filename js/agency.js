/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('div.modal').on('show.bs.modal', function() {
	var modal = this;
	var hash = modal.id;
	window.location.hash = hash;
	window.onhashchange = function() {
		if (!location.hash){
			$(modal).modal('hide');
		}
	}
});

$(function() {

    var currentSection = '';
    var sections = {};

    setSections();
    function setSections() {
        sections = $('section').map(function(s) {
            return {
                top: $(this).offset().top,
                height: $(this).height(),
                id: $(this).prop('id')
            }
        });
    };

    var latest = Date.now();

    $(window).on('resize', function() {
        setSections();
    });

    $(window).on('scroll', function (e) {
        if(Date.now() - latest < 200) {
            return;
        }
        latest = Date.now();

        sections.each(function() {
            if (this.id != currentSection && this.top < window.pageYOffset + 10 && this.top + this.height > window.pageYOffset + 10) {
                currentSection = this.id;
                console.log(currentSection);
            }
        });
    });
});