(function($) {
    $(document).ready(function(){
        $(".our-team-carousel").owlCarousel({
            dots: true,
            loop: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 5
                }
            }
        });

        $(".advisors-carousel").owlCarousel({
            margin: 30,
            dots: true,
            loop: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 4
                }
            }
        });
    });

    $(document).on('click', '.menu-mobile-effect', function(e) {
        e.stopPropagation();
        $('body').toggleClass('mobile-menu-open');
    });

    $(document).on('click', '.mobile-menu-wrapper', function(e) {
        $('body').removeClass('mobile-menu-open');
    });

    $(document).on('click', '.mobile-menu-inner', function(e) {
        e.stopPropagation();
    });
}(jQuery))