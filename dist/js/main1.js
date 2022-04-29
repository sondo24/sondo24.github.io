(function($) {

    var moon_fit = {
        load: function (){
            this.our_team_carousel();
            this.advisors_carousel();
            this.moon_fit_menu();
        },

        moon_fit_menu: function (){
            var $header = $('.site-header');
            if ($(window).scrollTop() > 0) {
                $header.removeClass('affix-top').addClass('affix');
            }
            $(window).scroll(function() {
                var current = $(this).scrollTop();
                if (current > 0) {
                    $header.removeClass('affix-top').addClass('affix');
                } else {
                    $header.removeClass('affix').addClass('affix-top');
                }
            });
        },

        our_team_carousel: function (){
            if(jQuery().owlCarousel()){
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
            }
        },

        advisors_carousel: function (){
            if(jQuery().owlCarousel()){
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
            }
        }
    }

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

    $(window).on('load',function() {
        moon_fit.load();
    });
}(jQuery))