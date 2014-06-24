define([
    'text!/templates/gallery.php',
    'views/gallery-album',
    'beans',
    'collections/parse',
    'models/parse',
    'channel'
],
    function(tmpl,GalleryAlbum,Beans,ParseCollection,ParseModel,Channel) {
        return Backbone.View.extend({
            template: Handlebars.compile(tmpl),
            beans: new Beans,
            debug: true,
            array:[],
            events: {
            },
            initialize: function() {
               
                this.render();
                this.call_album();
                
            },
            call_album:function(){

              var that=this;
              
              var gallery = new ParseCollection({name: 'gallery'});

                gallery.fetch({
                    success: function(collection,results,options){                       

                        $.each( results.results,function(index,result){
                            view = new GalleryAlbum({
                                model:new ParseModel(result)
                            });

                            that.$el.find('div.gallery-album').append(view.render().el);
                            
                        });
                        
                    }
                }); 
            },
            render: function() {
                this.$el.html( Handlebars.compile( tmpl)(this));
                

                return this;
            }

        });
    }
);