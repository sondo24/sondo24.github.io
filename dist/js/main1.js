(function($) {

    var moon_fit = {
        load: function (){
            this.our_team_carousel();
            this.advisors_carousel();
            this.moon_fit_menu();
            this.moon_fit_load();
            this.countUp();
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

        moon_fit_load: function (){
            var reveals = document.querySelectorAll(".reveal");

            for (var i = 0; i < reveals.length; i++) {

                var windowHeight = window.innerHeight;
                var elementTop = reveals[i].getBoundingClientRect().top;
                var elementVisible = 150;

                if (elementTop < 450) {
                    reveals[i].classList.add("active");
                }
            }

            $(window).scroll(function (){
                for (var i = 0; i < reveals.length; i++) {

                    var windowHeight = window.innerHeight;
                    var elementTop = reveals[i].getBoundingClientRect().top;
                    var elementVisible = 150;

                    if (elementTop < 450) {
                        reveals[i].classList.add("active");
                    }
                    // else {
                    //     reveals[i].classList.remove("active");
                    //     console.log('2222222222222')
                    // }
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
        },

        countUp: function (){
            // console.log('abccccccccc');
            // $('.counter').counterUp({
            //     delay: 10,
            //     time: 2000
            // });

//             const { counterUp } = window.counterUp
//             const el = document.querySelector( '.counter' )
// console.log('ellll:', el)
// // Start counting, typically you need to call this when the
// // element becomes visible, or whenever you like.
//             counterUp( el, {
//                 duration: 5000,
//                 delay: 16,
//             } )

            const counterUp = window.counterUp.default

            const callback = entries => {
                entries.forEach( entry => {
                    const el = entry.target
                    if ( entry.isIntersecting && ! el.classList.contains( 'is-visible' ) ) {
                        counterUp( el, {
                            duration: 2100,
                            delay: 50,
                        } )
                        el.classList.add( 'is-visible' )
                    }
                } )
            }

            const IO = new IntersectionObserver( callback, { threshold: 1 } )

            const el = document.querySelectorAll( '.counter' )

            for (var i = 0; i < el.length; i++) {
                IO.observe( el[i] )
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