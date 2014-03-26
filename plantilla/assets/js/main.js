/* ================== */

// preloader
jQuery(document).ready(function () {
    if(jQuery().queryLoader2){
        jQuery("body.preloader").queryLoader2({
            backgroundColor: "#fff",	 //Background color of the loader (in hex).
            barColor: "#7ebec7",	 //Background color of the bar (in hex).
            barHeight: 5,	 //Height of the bar in pixels. Default: 1
            deepSearch: true,	 //Set to true to find ALL images with the selected elements. If you don't want queryLoader to look in the children, set to false. Default: true.
            percentage: true,	 //Set to true to enable percentage visualising. Default is false.
            completeAnimation: "fade", //Set the animation type at the end. Options: "grow" or "fade". Default is "fade".
            onComplete: function(){
                jQuery("#ct_preloader").fadeOut(600);
            }
        });
    }
});

/* ==== PARALLAX ==== */
jQuery(window).load(function () {
    if(jQuery().parallax){
        if (!device.mobile() && !device.tablet()) {
            jQuery("#parallax1").parallax("20%", 0.2);
            jQuery("#parallax2").parallax("20%", 0.2);
            jQuery("#parallax3").parallax("20%", 0.2);
            jQuery("#parallax4").parallax("20%", 0.2);
        }
    }
});

jQuery(window).resize(function () {
    if(jQuery().parallax){
        if (!device.mobile() && !device.tablet()) {
                setTimeout(function () {
                    jQuery("#parallax1").parallax("20%", 0.2);
                }, 500);
                setTimeout(function () {
                    jQuery("#parallax2").parallax("20%", 0.2);
                }, 500);
                setTimeout(function () {
                    jQuery("#parallax3").parallax("20%", 0.2);
                }, 500);
                setTimeout(function () {
                    jQuery("#parallax4").parallax("20%", 0.2);
                }, 500);
        }
    }

});

$(window).load(function () {

    /* =========================== */
    /* ==== STICKY NAVIGATION ==== */

    $("#navigation").sticky({ topSpacing: 0 });
    $("#navigation").sticky('update');

    /* ====================== */
    /* ==== ISOTOPE INIT ==== */

    var $container = $('.projects')
    // initialize Isotope
    $container.isotope({
        // options...
        resizable: false, // disable normal resizing
        // set columnWidth to a percentage of container width
        masonry: { }
    });

    // update columnWidth on window resize
    $(window).smartresize(function () {
        $container.isotope({
            // update columnWidth to a percentage of container width
            masonry: { }
        });
    });
    $('.portfolioFilter a').click(function () {
        $('.portfolioFilter .current').removeClass('current');
        $(this).parent().addClass('current');

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

    /* ======================= */
    /* ==== TIMELINE INIT ==== */

    $(function()
    {
        // masonry plugin call
        if(!device.mobile()){
            $('.timeline').masonry({itemSelector : '.post'});
            Arrow_Points();
            $('.timeline').resize();
        }
    });

    function Arrow_Points()
    {
        var s = $('.timeline').find('.post');
        $.each(s,function(i,obj){
            var posLeft = $(obj).css("left");
            if(posLeft == "0px")
            {
                $(obj).addClass("col-left")
            }
            else
            {
                $(obj).addClass("col-right")
            }
        });
    }

    /* ==================== */
    /* ==== FLEXSLIDER ==== */

    if (($().flexslider)) {

        jQuery('.videoCarousel #bottom-slider').flexslider({
            animation: "fade",
            controlNav: false,
            directionNav: false,
            animationLoop: false,
            slideshow: false
        });
        jQuery('.services-slider.flexslider').flexslider({
            animation: "slide",              //String: Select your animation type, "fade" or "slide"
            animationLoop: true,             //Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
            smoothHeight: false,            //{NEW} Boolean: Allow height of the slider to animate smoothly in horizontal mode
            slideshow: true,                //Boolean: Animate slider automatically
            slideshowSpeed: 15000,           //Integer: Set the speed of the slideshow cycling, in milliseconds
            animationSpeed: 550,            //Integer: Set the speed of animations, in milliseconds
            // Primary Controls
            controlNav: false,               //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
            directionNav: true,             //Boolean: Create navigation for previous/next navigation? (true/false)

            pauseOnHover: true,            //Boolean: Pause the slideshow when hovering over slider, then resume when no longer hovering
            prevText: " ",           //String: Set the text for the "previous" directionNav item
            nextText: " ",
            useCSS: true
        });
        jQuery('.panel-slider.flexslider').flexslider({
            animation: "fade",              //String: Select your animation type, "fade" or "slide"
            animationLoop: true,             //Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
            smoothHeight: true,            //{NEW} Boolean: Allow height of the slider to animate smoothly in horizontal mode
            slideshow: true,                //Boolean: Animate slider automatically
            slideshowSpeed: 2000,           //Integer: Set the speed of the slideshow cycling, in milliseconds
            animationSpeed: 550,            //Integer: Set the speed of animations, in milliseconds
            // Primary Controls
            controlNav: false,               //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
            directionNav: true,             //Boolean: Create navigation for previous/next navigation? (true/false)

            pauseOnHover: true,            //Boolean: Pause the slideshow when hovering over slider, then resume when no longer hovering
            prevText: " ",           //String: Set the text for the "previous" directionNav item
            nextText: " ",
            useCSS: true
        });
        jQuery('.blog-min-slider.flexslider').flexslider({
            animation: "slide",              //String: Select your animation type, "fade" or "slide"
            animationLoop: true,             //Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
            smoothHeight: false,            //{NEW} Boolean: Allow height of the slider to animate smoothly in horizontal mode
            slideshow: true,                //Boolean: Animate slider automatically
            slideshowSpeed: 2000,           //Integer: Set the speed of the slideshow cycling, in milliseconds
            animationSpeed: 550,            //Integer: Set the speed of animations, in milliseconds
            // Primary Controls
            controlNav: true,               //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
            directionNav: false,             //Boolean: Create navigation for previous/next navigation? (true/false)

            pauseOnHover: true,            //Boolean: Pause the slideshow when hovering over slider, then resume when no longer hovering
            prevText: " ",           //String: Set the text for the "previous" directionNav item
            nextText: " ",
            useCSS: true
        });

        jQuery('.partners.flexslider').flexslider({
            animation: "slide",              //String: Select your animation type, "fade" or "slide"
            animationLoop: true,             //Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
            smoothHeight: false,            //{NEW} Boolean: Allow height of the slider to animate smoothly in horizontal mode
            slideshow: true,                //Boolean: Animate slider automatically
            slideshowSpeed: 2000,           //Integer: Set the speed of the slideshow cycling, in milliseconds
            animationSpeed: 550,            //Integer: Set the speed of animations, in milliseconds
            // Primary Controls
            controlNav: false,               //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
            directionNav: true,             //Boolean: Create navigation for previous/next navigation? (true/false)

            pauseOnHover: true,            //Boolean: Pause the slideshow when hovering over slider, then resume when no longer hovering
            prevText: " ",           //String: Set the text for the "previous" directionNav item
            nextText: " ",
            useCSS: true
        });
    }

    if(!device.mobile() && !device.tablet()){
        if (($().flexslider) && ($(".flexslider").length > 0)) {
            $('.flexslider.std-slider').each(function () {
                var $this = $(this);

                // initialize
                $this.find(".slides > li").each(function () {
                    var $slide_item = $(this);
                    var bg = validatedata($slide_item.attr('data-bg'), false);
                    if (bg) {
                        $slide_item.css('background-image', 'url("' + bg + '")');
                    }
                    $slide_item.css('min-height', $this.attr('data-height') + "px");

                    // hide slider content due to fade animation
                    // $slide_item.find(".inner").hide();
                })

                var containercontrol = $this.attr("data-controlscontainer");
                var animationtype = $this.attr("data-animation");
                var loop = validatedata(parseBoolean($this.attr("data-loop")), false);
                var smooth = validatedata(parseBoolean($this.attr("data-smooth")), false);
                var slideshow = validatedata(parseBoolean($this.attr("data-slideshow")), false);
                var speed = validatedata(parseInt($this.attr('data-speed')), 7000);
                var animspeed = validatedata(parseInt($this.attr("data-animspeed")), 600);
                var controls = validatedata(parseBoolean($this.attr('data-controls')), false);
                var dircontrols = validatedata(parseBoolean($this.attr('data-dircontrols')), false);

                if($this.attr("data-sync")){
                    var divsync = $this.attr("data-sync");
                    $this.flexslider({
                        animation: animationtype,              //String: Select your animation type, "fade" or "slide"
                        animationLoop: loop,             //Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
                        smoothHeight: smooth,            //{NEW} Boolean: Allow height of the slider to animate smoothly in horizontal mode
                        slideshow: slideshow,                //Boolean: Animate slider automatically
                        slideshowSpeed: speed,           //Integer: Set the speed of the slideshow cycling, in milliseconds
                        animationSpeed: animspeed,            //Integer: Set the speed of animations, in milliseconds
                        controlsContainer: containercontrol,
                        // Primary Controls
                        controlNav: controls,               //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
                        directionNav: dircontrols,             //Boolean: Create navigation for previous/next navigation? (true/false)
                        sync: divsync,

                        pauseOnHover: true,            //Boolean: Pause the slideshow when hovering over slider, then resume when no longer hovering
                        prevText: " ",           //String: Set the text for the "previous" directionNav item
                        nextText: " ",
                        useCSS: true,

                        // Callback API
                        start: function () {
                            setTimeout(function () {
                                $this.find(".slides > li.flex-active-slide .inner [data-fx]").each(function () {
                                    var $content = $(this);
                                    $content.addClass($content.data('fx')).show().addClass("activate");
                                })
                            }, 600);
                        },
                        before: function () {

                            $this.find(".slides > li .inner [data-fx]").each(function () {
                                var $content = $(this);
                                $content.removeClass($content.data('fx')).removeClass("activate");
                                setTimeout()
                            })
                        },           //Callback: function(slider) - Fires asynchronously with each slider animation
                        after: function () {
                            setTimeout(function () {
                                $this.find(".slides > li.flex-active-slide .inner [data-fx]").each(function () {
                                    var $content = $(this);
                                    $content.addClass($content.data('fx')).show().addClass("activate");
                                })
                            }, 150);
                        },            //Callback: function(slider) - Fires after each slider animation completes
                        end: function () {
                        },              //Callback: function(slider) - Fires when the slider reaches the last slide (asynchronous)
                        added: function () {
                        },            //{NEW} Callback: function(slider) - Fires after a slide is added
                        removed: function () {
                        }           //{NEW} Callback: function(slider) - Fires after a slide is removed
                    });
                } else{
                    $this.flexslider({
                        animation: animationtype,              //String: Select your animation type, "fade" or "slide"
                        animationLoop: loop,             //Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
                        smoothHeight: smooth,            //{NEW} Boolean: Allow height of the slider to animate smoothly in horizontal mode
                        slideshow: slideshow,                //Boolean: Animate slider automatically
                        slideshowSpeed: speed,           //Integer: Set the speed of the slideshow cycling, in milliseconds
                        animationSpeed: animspeed,            //Integer: Set the speed of animations, in milliseconds
                        controlsContainer: containercontrol,
                        // Primary Controls
                        controlNav: controls,               //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
                        directionNav: dircontrols,             //Boolean: Create navigation for previous/next navigation? (true/false)


                        pauseOnHover: true,            //Boolean: Pause the slideshow when hovering over slider, then resume when no longer hovering
                        prevText: " ",           //String: Set the text for the "previous" directionNav item
                        nextText: " ",
                        useCSS: true,

                        // Callback API
                        start: function () {
                            setTimeout(function () {
                                $this.find(".slides > li.flex-active-slide .inner [data-fx]").each(function () {
                                    var $content = $(this);
                                    $content.addClass($content.data('fx')).show().addClass("activate");
                                })
                            }, 600);
                        },
                        before: function () {

                            $this.find(".slides > li .inner [data-fx]").each(function () {
                                var $content = $(this);
                                $content.removeClass($content.data('fx')).removeClass("activate");
                            })
                        },           //Callback: function(slider) - Fires asynchronously with each slider animation
                        after: function () {
                            setTimeout(function () {
                                $this.find(".slides > li.flex-active-slide .inner [data-fx]").each(function () {
                                    var $content = $(this);
                                    $content.addClass($content.data('fx')).show().addClass("activate");
                                })
                            }, 150);
                        },            //Callback: function(slider) - Fires after each slider animation completes
                        end: function () {
                        },              //Callback: function(slider) - Fires when the slider reaches the last slide (asynchronous)
                        added: function () {
                        },            //{NEW} Callback: function(slider) - Fires after a slide is added
                        removed: function () {
                        }           //{NEW} Callback: function(slider) - Fires after a slide is removed
                    });
                };
            });
        }
    } else{
        if (($().flexslider) && ($(".flexslider").length > 0)) {
            $('.flexslider.std-slider').each(function () {
                var $this = $(this);

                // initialize
                $this.find(".slides > li").each(function () {
                    var $slide_item = $(this);
                    var bg = validatedata($slide_item.attr('data-bg'), false);
                    if (bg) {
                        $slide_item.css('background-image', 'url("' + bg + '")');
                    }
                    $slide_item.css('min-height', $this.attr('data-height') + "px");

                    // hide slider content due to fade animation
                    // $slide_item.find(".inner").hide();
                })

                var containercontrol = $this.attr("data-controlscontainer");
                var animationtype = $this.attr("data-animation");
                var loop = validatedata(parseBoolean($this.attr("data-loop")), false);
                var smooth = validatedata(parseBoolean($this.attr("data-smooth")), false);
                var slideshow = validatedata(parseBoolean($this.attr("data-slideshow")), false);
                var speed = validatedata(parseInt($this.attr('data-speed')), 7000);
                var animspeed = validatedata(parseInt($this.attr("data-animspeed")), 600);
                var controls = validatedata(parseBoolean($this.attr('data-controls')), false);
                var dircontrols = validatedata(parseBoolean($this.attr('data-dircontrols')), false);

                if($this.attr("data-sync")){
                    var divsync = $this.attr("data-sync");
                    $this.flexslider({
                        animation: animationtype,              //String: Select your animation type, "fade" or "slide"
                        animationLoop: loop,             //Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
                        smoothHeight: smooth,            //{NEW} Boolean: Allow height of the slider to animate smoothly in horizontal mode
                        slideshow: slideshow,                //Boolean: Animate slider automatically
                        slideshowSpeed: speed,           //Integer: Set the speed of the slideshow cycling, in milliseconds
                        animationSpeed: animspeed,            //Integer: Set the speed of animations, in milliseconds
                        controlsContainer: containercontrol,
                        // Primary Controls
                        controlNav: controls,               //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
                        directionNav: dircontrols,             //Boolean: Create navigation for previous/next navigation? (true/false)
                        sync: divsync,

                        pauseOnHover: true,            //Boolean: Pause the slideshow when hovering over slider, then resume when no longer hovering
                        prevText: " ",           //String: Set the text for the "previous" directionNav item
                        nextText: " ",
                        useCSS: true
                    });
                } else{
                    $this.flexslider({
                        animation: animationtype,              //String: Select your animation type, "fade" or "slide"
                        animationLoop: loop,             //Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
                        smoothHeight: smooth,            //{NEW} Boolean: Allow height of the slider to animate smoothly in horizontal mode
                        slideshow: slideshow,                //Boolean: Animate slider automatically
                        slideshowSpeed: speed,           //Integer: Set the speed of the slideshow cycling, in milliseconds
                        animationSpeed: animspeed,            //Integer: Set the speed of animations, in milliseconds
                        controlsContainer: containercontrol,
                        // Primary Controls
                        controlNav: controls,               //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
                        directionNav: dircontrols,             //Boolean: Create navigation for previous/next navigation? (true/false)


                        pauseOnHover: true,            //Boolean: Pause the slideshow when hovering over slider, then resume when no longer hovering
                        prevText: " ",           //String: Set the text for the "previous" directionNav item
                        nextText: " ",
                        useCSS: true
                    });
                };
            });
        }
    }
});

/* ====================== */
/* ==== BLOG MASONRY ==== */

if (($.Isotope) && ($('.with-isotope').length > 0)) {

    jQuery(window).load(function () {

        // blog masonry

        var $blogContainer = $('.with-isotope'), // object that will keep track of options
            isotopeOptions = {}, // defaults, used if not explicitly set in hash
            defaultOptions = {
                itemSelector: '.post',
                layoutMode: 'sloppyMasonry',
                resizable: false, // disable normal resizing
                // set columnWidth to a percentage of container width
                masonry: { }
            };

        $(window).smartresize(function () {
            $blogContainer.isotope({
                // update columnWidth to a percentage of container width
                masonry: { }
            });
        });

        // set up Isotope
        $blogContainer.isotope(defaultOptions, function () {

            // fix for height dynamic content
            setTimeout(function () {
                $blogContainer.isotope('reLayout');
            }, 1000);

        });
    });
}

$(document).ready(function () {

    /* ================== */
    /* ==== TOOLTIPS ==== */

    jQuery("[data-toggle='tooltip']").tooltip();

    /* ======================================= */
    /* === CLICKABLE MAIN PARENT ITEM MENU === */
    jQuery(".navbar-default li.dropdown > .dropdown-toggle").removeAttr("data-toggle data-target");

    /* ==================== */
    /* ==== SVG INJECT ==== */

    $('.svg-inject').svgInject();
    /* ======================== */
    /* ==== PAGE SCROLLING ==== */

    $('.btn-scroll[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash, $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });

    if(jQuery().pageScroller){
        if(!device.mobile() && !device.tablet()){
            jQuery('body').pageScroller({
                navigation: '#navigation .onepage',
                sectionClass: 'chapter',
                animationType: 'easeOutExpo',
                animationSpeed: 750,
                keyboardControl: true,
                scrollOffset: '-60'
            })
        }
    }

    // add background position for parallax. fix for ipad and iphone
    if(!device.mobile() && !device.tablet()){
        jQuery('.parallax').css('background-attachment' , 'fixed');
    } else{
        jQuery('.parallax').css('background-attachment' , 'scroll');
    }

    $('#nav-footer .onepage a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash, $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top -60
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });

    $('#toTop').click(function () {
        $("body,html").animate({scrollTop: 0}, 600);
        return false;
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() != 0) {
            $("#toTop").fadeIn(300);
        } else {
            $("#toTop").fadeOut(300);
        }
    });

    /* ========================= */
    /* ==== TIMELINE SCROLL ==== */

    var step = 300;
    var scrolling = false;

// Wire up events for the 'scrollUp' link:
    $("#scrollUp").bind("click", function (event) {
        event.preventDefault();
        // Animates the scrollTop property by the specified
        // step.
        $(".timeline").animate({
            scrollTop: "-=" + step + "px"
        });
    }).bind("mouseover", function (event) {
        scrolling = true;
        scrollContent("up");
    }).bind("mouseout", function (event) {
        scrolling = false;
    });


    $("#scrollDown").bind("click", function (event) {
        event.preventDefault();
        $(".timeline").animate({
            scrollTop: "+=" + step + "px"
        });
    }).bind("mouseover", function (event) {
        scrolling = true;
        scrollContent("down");
    }).bind("mouseout", function (event) {
        scrolling = false;
    });

    function scrollContent(direction) {
        var amount = (direction === "up" ? "-=1px" : "+=1px");
        $(".timeline").animate({
            scrollTop: amount
        }, 1, function () {
            if (scrolling) {
                scrollContent(direction);
            }
        });
    }

    /* ======================== */
    /* ==== ANIMATION INIT ==== */


    if (jQuery().appear) {
        if (device.mobile() || device.tablet()) {
            // disable animation on mobile
            jQuery("body").removeClass("withAnimation");
        } else {
            jQuery('.withAnimation .animated').appear(function () {
                jQuery(this).each(function () {
                    jQuery(this).addClass('activate');
                    jQuery(this).addClass($(this).data('fx'));
                });
            }, {accY: -150});
        }
    }

    /* ================== */
    /* ==== COUNT TO ==== */

    $('.counter').data('countToOptions', {
        formatter: function (value, options) {
            return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ' ');
        }
    }).appear(function () {
        $(this).each(function (options) {
            var $this = $(this);
            options = $.extend({}, options || {}, $this.data('countToOptions') || {});
            $this.countTo(options);
        });
    });

    /* ================================= */
    /* ==== PERSON FULL DESCRIPTION ==== */

    $('.meet-person a').click(function () {
        $('.team-member').removeClass('active');
        $('.description-complete').removeClass('active');
        var $this = $(this);
        $this.closest("div[class^='col-md'] .team-member").addClass('active');
        $this.closest("div[class^='col-md']").next('.description-complete').addClass('active');
        return false;
    });

    $('.description-complete .close').click(function () {
        var $this = $(this);
        $('.team-member').removeClass('active');
        $this.closest('.description-complete').removeClass('active');
        return false;
    });

    /* ================================ */
    /* ==== SCROLL IMAGES ON HOVER ==== */

        /*
        jQuery(".scrollme .inner img").mouseover(function(){
            var $distance = this.height - jQuery(this).parent().height();
            console.log(this);
            jQuery(this).stop().animate({ marginTop: -$distance}, 5000, 'linear');
        }).mouseout(function(){
            jQuery(this).stop().animate({ marginTop: '0'}, 300);
        });
        */



    jQuery(".scrollme").mouseover(function(){
        var $image = jQuery(this).find(".inner img");

        var $distance = $image.height() - $image.parent().height();
        $image.stop().animate({ marginTop: -$distance}, 5000, 'linear');
    }).mouseout(function(){
        var $image = jQuery(this).find(".inner img");
        $image.stop().animate({ marginTop: '0'}, 300);
    });

    /* ==================== */
    /* ==== PIE CHARTS ==== */

    if(jQuery().appear) {
        jQuery('.pie-chart').appear(function () {
            jQuery(this).easyPieChart({
                animate: jQuery(this).attr('data-animate'),
                barColor: jQuery(this).attr('data-barcolor'),
                trackColor: jQuery(this).attr('data-trackcolor'),
                scaleColor: false,
                lineCap: jQuery(this).attr('data-linecap'),
                lineWidth: jQuery(this).attr('data-linewidth'),
                size: jQuery(this).attr('data-size')
            });
        }, {accY: -150});
    }

    /* ====================== */
    /* ==== PROGRESS BAR ==== */

    if(jQuery().appear) {
        jQuery('.progress').appear(function () {
            var $this = jQuery(this);
            $this.each(function () {
                var $innerbar = $this.find(".progress-bar");
                var percentage = $innerbar.attr("data-percentage");
                $innerbar.addClass("animating").css("width", percentage + "%");

                $innerbar.on('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd', function () {
                    $innerbar.find(".pull-right").fadeIn(900);
                });

            });
        }, {accY: -100});
    }


    /* ======================== */
    /* ==== DRILLDOWN MENU ==== */

    if(jQuery().ctDrillDown){

        var $drillDown = $("#drilldown");
        var $breadcrumbs = $("#drilldown-breadcrumbs");
        var $searchPaths = $("#drilldown-searchPaths");

        // attach drill down menu
        $drillDown.ctDrillDown();

        // build initial breadcrumbs
        handleBreadcrumbs();

        // rebuild breadcrumbs on menu changes
        $drillDown.bind("drilldownchange", handleBreadcrumbs);


        // handle search
        $drillDown.ctDrillDown("searchWrapper", $("#drilldown-search"), $("#drilldown-searchPaths"));



        // breadcrumbs builder
        function handleBreadcrumbs() {
            var breadcrumbs = $drillDown.ctDrillDown("getBreadcrumbs");
            var bFormatted = $drillDown.ctDrillDown("getBreadcrumbsFormatted", breadcrumbs, false);

            $breadcrumbs.html("").append(bFormatted);
        }
    }


    /* ================================= */
    /* ==== FIT VIDEOS TO CONTAINER ==== */
    if (($().fitVids)){
        $(".fit-video").fitVids();
    }
});

/* ===================== */
/* ==== GOOGLE MAPS ==== */


function validateDataAttr($attr) {
    "use strict";
    return $attr !== undefined;

};

// init gmap - Asynchronous Loading
function initmap() {
    "use strict";
    jQuery(".googleMap").each(function () {
        var atcenter = "";
        var $this = jQuery(this);
        var location = $this.data("location");
        var text = $this.data("text");
        var offset = 0;
        var zoom = 17;

        if (validateDataAttr($this.data("offset"))) {
            offset = $this.data("offset");
        }

        if (validateDataAttr($this.data("zoom"))) {
            zoom = $this.data("zoom");
        }

        if (validateDataAttr(location)) {

            $this.gmap3({
                marker: {
                    //latLng: [40.616439, -74.035540],
                    address: location,
                    options: {
                        visible: true
                    },
                    callback: function (marker) {
                        atcenter = marker.getPosition();
                    }
                },
                map: {
                    options: {
                        //maxZoom:11,
                        zoom: zoom,
                        mapTypeId: google.maps.MapTypeId.ROADMAP,
                        // ('ROADMAP', 'SATELLITE', 'HYBRID','TERRAIN');
                        scrollwheel: false,
                        draggable: false,
                        disableDoubleClickZoom: false,
                        mapTypeControlOptions: {
                            //mapTypeIds: [google.maps.MapTypeId.ROADMAP, google.maps.MapTypeId.HYBRID],
                            //style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                            //position: google.maps.ControlPosition.RIGHT_CENTER
                            mapTypeIds: []
                        }
                    }
                    /*events: {
                     idle: function () {
                     if (!$this.data('idle')) {
                     $this.gmap3('get').panBy(0, offset);
                     $this.data('idle', true);
                     }
                     }
                     }*/
                },
                overlay: {
                    //latLng: [40.616439, -74.035540],
                    address: location,
                    options: {
                        content: '',
                        offset: {
                            y: 0,
                            x: 0
                        }
                    }
                }
                //},"autofit"
            });

            // center on resize
            google.maps.event.addDomListener(window, "resize", function () {
                //var userLocation = new google.maps.LatLng(53.8018,-1.553);
                $this.gmap3('get').setCenter(atcenter);
                $this.gmap3('get').panBy(0, 0);
            });

            // set height
            $this.css("min-height", $this.data("height") + "px");
        }

    });
};

function loadScript() {
    "use strict";
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' + 'callback=initmap';
    document.body.appendChild(script);
};

window.onload = loadScript;

/* ======================= */
/* ==== HIDE/SHOW MAP ==== */

jQuery(document).ready(function () {
    "use strict";
    jQuery('button.btn-map').click(function () {

        var contactForm = jQuery(".map-container");

        //		contactForm.toggle("slow");
        contactForm.fadeToggle("slow", function () {

            if ((contactForm).is(':visible')) {
                jQuery('button.btn-map').html("<i class='fa fa-map-marker'></i> Show Map");

            } else {
                jQuery('button.btn-map').html("<i class='fa fa-envelope'></i> Show Form");
            }
        });
    });
});


/* ========================== */
/* ==== HELPER FUNCTIONS ==== */

// detect IE


var tmp = document.documentMode, e, isIE;

// Try to force this property to be a string.
try {
    document.documentMode = "";
} catch (e) {
}
;

// If document.documentMode is a number, then it is a read-only property, and so
// we have IE 8+.
// Otherwise, if conditional compilation works, then we have IE < 11.
// Otherwise, we have a non-IE browser.
isIE = typeof document.documentMode == "number" ? !0 : eval("/*@cc_on!@*/!1");

// Switch back the value to be unobtrusive for non-IE browsers.
try {
    document.documentMode = tmp;
} catch (e) {
}
;


function validatedata($attr, $defaultValue) {
    if ($attr !== undefined) {
        return $attr
    }
    return $defaultValue;
}

function parseBoolean(str, $defaultValue) {
    if (str == 'true') {
        return true;
    }
    return $defaultValue;
    //return /true/i.test(str);
}