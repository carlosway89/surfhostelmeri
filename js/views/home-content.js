define([
    'text!/templates/home-content.php',
    'views/home-address',
    'views/home-picture',
    'beans',
    'collections/parse',
    'models/parse',
    'channel'
],
    function(tmpl,HomeAddress,HomePicture,Beans,ParseCollection,ParseModel,Channel) {
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
                this.call_address();
                this.call_pictures();

                return this;
            },
            call_address:function(){

              var that=this;
              
              var home_address = new ParseCollection({name: 'home_address'});

                home_address.fetch({
                    success: function(collection,results,options){                       

                        $.each( results.results,function(index,result){
                            view = new HomeAddress({
                                model:new ParseModel(result)
                            });
                            content=that.$el.find('div.geolocation');
                            content.after(view.render().el);
                            
                        });
                        
                    }
                });
            },
            call_pictures:function(){

              var that=this;
              
              var pictures = new ParseCollection({
                name: 'pictures',
                where:{
                    page:'home'
                }
              });

                pictures.fetch({
                    success: function(collection,results,options){                       

                        $.each( results.results,function(index,result){
                            view = new HomePicture({
                                model:new ParseModel(result)
                            });
                            content=that.$el.find('div.caption-'+result.position);
                            content.after(view.render().el);
                            
                        });
                        
                    }
                });
            },
            principal_text:function(){ return this.model.get('principal_text'); },
            title_secondary:function(){ return this.model.get('title_secondary'); },
            how_get:function(){ return this.model.get('how_get'); },
            picture_text_1:function(){ return this.model.get('picture_text_1'); },
            picture_text_2:function(){ return this.model.get('picture_text_2'); }


        });
    }
);