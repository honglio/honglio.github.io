(function($) {
    "use strict";

    // for banner height js
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    $('.banner').css({
        'width': windowWidth,
        'height': windowHeight - 80
    });

    // banner image resize
    $(window).load(function() {

        var theWindow = $(window),
            $bg = $(".bannerImg");
        //aspectRatio      = $bg.width() / $bg.height();

        function resizeBg() {
            if (theWindow.width() < theWindow.height()) {
                $bg
                    .removeClass()
                    .addClass('bgheight');
            } else {
                $bg
                    .removeClass()
                    .addClass('bgwidth');
            }
        }

        theWindow.resize(resizeBg).trigger("resize");

    });

    // Smoth page scroll
    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 40
                    }, 1000);
                    return false;
                }
            }
        });
    });


    // chart loding
    $(window).load(function() {

        var chart = window.chart = $('.chart').data('easyPieChart');
        $('.js_update').on('click', function() {
            chart.update(Math.random() * 100);
        });
    });


    // for skill chat jquary
    $(function() {
        //var windowBottom = $(window).height();
        var index = 0;
        $(document).scroll(function() {
                var top = $('.technical').height() - $(window).scrollTop();
                console.log(top)
                if (top < -300) {
                    if (index == 0) {

                        $('.chart').easyPieChart({
                            easing: 'easeOutBounce',
                            onStep: function(from, to, percent) {
                                $(this.el).find('.percent').text(Math.round(percent));
                            }
                        });

                    }
                    index++;
                }
            })
            //console.log(nagativeValue)
    });

    // for portfoli filter jquary
    $(window).load(function() {
        var $container = $('.portfolioContainer');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });

        $('.portfolioFilter a').click(function() {
            $('.portfolioFilter .current').removeClass('current');
            $(this).addClass('current');

            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });
    });

    // for portfoli lightbox jquary
    $(function() {
        var $chosenSheet,
            $stylesheets = $("a[id^=theme-]");

        // run rlightbox
        $(".lb").rlightbox();
        $(".lb_title-overwritten").rlightbox({
            overwriteTitle: true
        });
    });

}(jQuery));
