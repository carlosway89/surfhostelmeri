define([
    'text!/templates/services.php',
    'views/services-content',
    'beans',
    'collections/parse',
    'models/parse',
    'channel'
],
    function(tmpl,ServicesContent,Beans,ParseCollection,ParseModel,Channel) {
        return Backbone.View.extend({
            template: Handlebars.compile(tmpl),
            beans: new Beans,
            debug: true,
            array:[],
            events: {
            },
            initialize: function() {
                var that=this;
                this.render();
                this.call_page();
                this.call_title();
                Channel.on('change.language.services',function(){
                    that.render();
                    that.call_page();
                    that.call_title();                    
                }); 
            },
            call_page:function(){

              var that=this;
              
              var services = new ParseCollection({
                name: 'services',
                where: {
                    lang:this.beans.readCookie('language.choice'),
                    type:'content'                       
                }});

                services.fetch({
                    success: function(collection,results,options){                       

                        $.each( results.results,function(index,result){
                            view = new ServicesContent({
                                model:new ParseModel(result),
                                index:index
                            });
                            var content=that.$el.find('.services-col-'+result.col);
                            content.append(view.render().el);
                        });
                        
                    }
                });
                

            },
            call_title:function(){
                var that=this;
              
              var services = new ParseCollection({
                name: 'services',
                where: {
                    lang:this.beans.readCookie('language.choice'),
                    type:'header'                       
                }});

                services.fetch({
                    success: function(collection,results,options){                       

                        $.each( results.results,function(index,result){
                            var content=that.$el.find('.text-services');
                            content.html(result.title);
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