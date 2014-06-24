define([
    'text!/templates/gallery-picture.php',
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
            className:'col-xs-6 col-sm-3',
            events: {
            },
            initialize: function() {
            },
            render: function() {
                this.$el.html( Handlebars.compile( tmpl)(this));
                var that=this;

                $(document).ready(function() {
                    that.$el.find('.img-thumb').resizecrop({
                        width: '190',
                        height: '150',
                        vertical:'top'
                    });

                    that.$el.find('.thumb').hover(function(e){
                      var val=$(e.currentTarget);
                      val.find('.hover-information').addClass('hidden').removeClass('show');
                    },function(e){
                      var val=$(e.currentTarget);
                      val.find('.hover-information').addClass('show').removeClass('hidden')
                    });

                    var $lightbox = $('#lightbox');
                    
                    that.$el.find('[data-target="#lightbox"]').on('click', function(event) {
                        var $img = $(this).find('img'), 
                            src = $img.attr('src'),
                            alt = $img.attr('alt'),
                            css = {
                                'maxWidth': $(window).width() - 100,
                                'maxHeight': $(window).height() - 100
                            };
                    
                        $lightbox.find('.close').addClass('hidden');
                        $lightbox.find('img').attr('src', src);
                        $lightbox.find('img').attr('alt', alt);
                        $lightbox.find('img').css(css);
                    });
                    
                    $lightbox.on('shown.bs.modal', function (e) {
                        var $img = $lightbox.find('img');
                            
                        $lightbox.find('.modal-dialog').css({'width': $img.width()});
                        $lightbox.find('.close').removeClass('hidden');
                    });

                    
                });

                this.$el.fadeIn(2000);
                return this;
            },
            picture:function(){ return this.model.get('picture').url;},
            title:function(){ return this.model.get('title');}

        });
    }
);