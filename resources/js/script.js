        //aos
        AOS.init();
        
        
        //back to top
        if ($('#back-to-top').length) {
            var scrollTrigger = 100, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
                } else {
                $('#back-to-top').removeClass('show');
                }
            };
            backToTop();
            $(window).on("scroll", function () {
            backToTop();
            });
            $('#back-to-top').on("click", function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
            });
        }
        
    
        //year script
        var getYear = new Date().getFullYear();
        document.getElementById('getYear').innerHTML = getYear;
    
    
        //image slider
        $('.slider-1').owlCarousel({
            loop:true,
            autoplay: true,
            margin:30,
            nav:true,
            dots:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:4
                }
            }
            })

