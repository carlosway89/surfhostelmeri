// Filename: router.js
 define([
     'beans',
     'models/parse',
     'channel'
     ], function(
        Beans,
        ParseModel,
        Channel
     ){
        var AppRouter = Backbone.Router.extend({
            beans: new Beans,
            debug: true,
            routes: {
                'home': 'home',
                'services':'services',
                'pricing':'pricing',
                'gallery':'gallery'
            },


            home: function(){

                /**
                 * Send a clear-last-view event to Channel, so that any view can clean
                 * up after itself
                 */
                this.initial_page('home');
                require(['views/home'],function(Home){
            
                    var view = new Home({
                        el: $('div.content-page')
                    });
                });
                

                    
            },
            services:function(){
                this.initial_page('services');
                require(['views/services'],function(Services){
            
                    var view = new Services({
                        el: $('div.content-page')
                    });
                });
            },
            gallery:function(){
                this.initial_page('gallery');
                require(['views/gallery'],function(Gallery){
            
                    var view = new Gallery({
                        el: $('div.content-page')
                    });
                });
            },
            pricing:function(){
                this.initial_page('pricing');
                require(['views/pricing'],function(Pricing){
            
                    var view = new Pricing({
                        el: $('div.content-page')
                    });
                });
            },
            initial_page:function(root){

                var principal=$('.principal-page');
                var content=$('div.content-page');
                content.empty();
                var nav_menu=$('.nav-menu');

                $('body,html').animate({ scrollTop: 0}, 800);

                if(!principal.hasClass('top5'))
                    principal.addClass('top5');
                var width=$( document ).width();

                if(width<=992){
                    var nav_menu=$('.nav-menu-sm');
                }

                nav_menu.find('.clicked').removeClass('clicked');
                nav_menu.find('a').removeClass('actived');
                nav_menu.find('#'+root).addClass('clicked').find('a').addClass('actived');

                if(!content.is(':visible'))
                    content.delay(300).show('slide',800);
                else
                    content.hide('slide',800,function(){
                        content.delay(300).show('slide',800);    
                    });           

            }


        });
        var initialize = function(){

                /**
                 * Now that we've loaded both APIs, we can proceed to begin routing...
                 */
                var app_router = new AppRouter;
                
                app_router.on('route:defaultAction', function(actions){

                    /**
                     * We don't know this view, so show a 404
                     */
                    require(['views/four-oh-four'],function(FourOhFour){

                        var $div = $('div.view-container');
                        $div.addClass( 'container-message container');

                        new FourOhFour({
                            el: $div
                        });

                    });

                });

                /**
                 * Set default route
                 */
                // if ( ! window.location.hash.length ) window.location.hash = '#home';
                Backbone.history.start();

     };
 return {
     initialize: initialize
    };
 });