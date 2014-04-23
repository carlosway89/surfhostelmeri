define([
    'text!/templates/home.php',
    'views/home-content',
    'beans',
    'collections/parse',
    'models/parse',
    'channel'
],
    function(tmpl,HomeContent,Beans,ParseCollection,ParseModel,Channel) {
        return Backbone.View.extend({
            template: Handlebars.compile(tmpl),
            beans: new Beans,
            debug: true,
            array:[],
            events: {
            },
            initialize: function() {
                var that=this;

                this.call_page();
                this.render();

                Channel.on('change.language.home',function(){
                    that.call_page();
                    that.render();
                }); 
                              
            },
            call_page:function(){

              var that=this;
              
              var home = new ParseCollection({
                name: 'home',
                where: {
                    lang:this.beans.readCookie('language.choice')                       
                }});

                home.fetch({
                    success: function(collection,results,options){                       

                        $.each( results.results,function(index,result){
                            view = new HomeContent({
                                el:that.$el.find('div.home-content'),
                                model:new ParseModel(result)
                            });
                        });
                        
                    }
                });
                

            },
            render: function() {
                this.$el.html( Handlebars.compile( tmpl)(this));
                var that=this;
                               
                return this;
            }


        });
    }
);