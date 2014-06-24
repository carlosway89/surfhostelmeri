define([
    'text!/templates/gallery-album.php',
    'views/gallery-picture',
    'beans',
    'collections/parse',
    'models/parse',
    'channel'
],
    function(tmpl,GalleryPicture,Beans,ParseCollection,ParseModel,Channel) {
        return Backbone.View.extend({
            template: Handlebars.compile(tmpl),
            beans: new Beans,
            debug: true,
            array:[],
            className: 'row',
            events: {
            },
            initialize: function() {
                this.call_picture();
            },
            call_picture:function(){

              var that=this;
              
              var album = new ParseCollection({
                name: 'album',
                    where:{
                        gallery:{
                            __type: 'Pointer',
                            className: 'gallery',
                            objectId: that.objectid()
                        }                        
                    }

                });

                album.fetch({
                    success: function(collection,results,options){                       

                        $.each( results.results,function(index,result){
                            view = new GalleryPicture({
                                model:new ParseModel(result)
                            });
                            that.$el.find('.gallery-picture').append(view.render().el);
                        });
                        
                    }
                });   

            },
            render: function() {
                this.$el.html( Handlebars.compile( tmpl)(this));
                this.$el.fadeIn(2000);

                return this;
            },
            title:function(){ return this.model.get('title')!=' '?this.model.get('title'):'Album'; },
            objectid:function(){ return this.model.get('objectId'); }

        });
    }
);