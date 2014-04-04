define([
    'text!/templates/home.php',
    'beans',
    'collections/parse',
    'models/parse',
    'channel'
],
    function(tmpl,Beans,ParseCollection,ParseModel,Channel) {
        return Backbone.View.extend({
            template: Handlebars.compile(tmpl),
            beans: new Beans,
            debug: true,
            array:[],
            events: {
            },
            initialize: function() {
                this.render();
            },
            render: function() {
                this.$el.html( Handlebars.compile( tmpl)(this));

                $(document).ready(function(ev){
                    $('#custom_carousel').on('slide.bs.carousel', function (evt) {
                      $('#custom_carousel .controls li.active').removeClass('active');
                      $('#custom_carousel .controls li:eq('+$(evt.relatedTarget).index()+')').addClass('active');
                    });

                    var boxheight = $('.carousel-inner').height();
                    var itemlength = $('.item').length;
                    var triggerheight = Math.round(boxheight/itemlength+1);
                    $('.list-group-item').outerHeight(triggerheight); //maybe Bootsnipp only
                    $('.list-group-item').height(triggerheight+30); //works fine in local testing
                    
                    var clickEvent = false;
                    $('#informationCarousel').carousel({
                        interval:   4000    
                    }).on('click', '.list-group li', function() {
                            clickEvent = true;
                            $('.list-group li').removeClass('active');
                            $(this).addClass('active');     
                    }).on('slid.bs.carousel', function(e) {
                        if(!clickEvent) {
                            var count = $('.list-group').children().length -1;
                            var current = $('.list-group li.active');
                            current.removeClass('active').next().addClass('active');
                            var id = parseInt(current.data('slide-to'));
                            if(count == id) {
                                $('.list-group li').first().addClass('active'); 
                            }
                        }
                        clickEvent = false;
                    });

                });
                
                return this;
            }

        });
    }
);