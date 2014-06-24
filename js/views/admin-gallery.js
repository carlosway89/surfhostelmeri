define([
    'text!/templates/admin-gallery.php',
    'views/tab-content-gallery',    
    'beans',
    'collections/parse',
    'models/parse',
    'channel'
],
    function(tmpl,ContentGallery,Beans,ParseCollection,ParseModel,Channel) {
        return Backbone.View.extend({
            template: Handlebars.compile(tmpl),
            beans: new Beans,
            debug: true,
            array:[],
            className:'tab-pane fade',
            events: {
                'click a.add-album':'new_album'
            },
            initialize: function() {

            },
            call_album:function(){

              var that=this;
              var content=that.$el.find('.tab-content-gallery');

              var gallery = new ParseCollection({
                name: 'gallery',
                sort: '-createdAt',
                });

                gallery.fetch({
                    success: function(collection,results,options){                       
                        content.empty();

                        $.each( results.results,function(index,result){

                            var view =new ContentGallery({
                                model:new ParseModel(result)
                            });
                            
                            content.append(view.render().el);
                            
                        });
                        
                    }
                }); 
            },
            new_album:function(){
                
                var gallery = new ParseModel({name: 'gallery'});
                gallery.set('title',' ');

                gallery.save(null,{
                    success: function(model,result,options){
                        Channel.trigger('update.gallery');                       
                    },
                    error: function(model,xhr,options){
                        
                    }
                });

            },
            render: function() {
                this.$el.html( Handlebars.compile( tmpl)(this));
                this.$el.attr('id','gallery');

                var that=this;

                this.call_album();

                Channel.on('update.gallery',function(){
                    that.call_album();
                });

                return this;
            }

        });
    }
);