(function ($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: 'fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function () {
        $('.navbar-toggle:visible').click();
    });

    $(document).ready(function () {
        // Transition effect for navbar 
        $(window).scroll(function () {
            // checks if window is scrolled more than 500px, adds/removes solid class
            if ($(this).scrollTop() > 200) {
                $('.navbar-expand-lg').addClass('solid');
            } else {
                $('.navbar-expand-lg').removeClass('solid');
            }
        });
    });

    $('.carousel').carousel({
        interval: 4000
    });

    $(function () {
        $('.pop').on('click', function () {
            $('.imagepreview').attr('src', $(this).find('img').attr('src'));
            $('#imagemodal').modal('show');
        });
    });

})(jQuery); // End of use strict
