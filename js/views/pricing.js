define([
    'text!/templates/pricing.php',
    'views/pricing-room',
    'views/pricing-policies',
    'beans',
    'collections/parse',
    'models/parse',
    'channel'
],
    function(tmpl,PricingRoom,PoliciesContent,Beans,ParseCollection,ParseModel,Channel) {
        return Backbone.View.extend({
            template: Handlebars.compile(tmpl),
            beans: new Beans,
            debug: true,
            array:[],
            events: {
            },
            initialize: function() {
                this.render();
                this.call_page();
                this.call_header();
                var that=this;
                Channel.on('change.language.pricing',function(){
                    that.render();
                    that.call_page();
                    that.call_header();
                    
                });
            },
            call_page:function(){

              var that=this;
              
              var pricing = new ParseCollection({
                name: 'pricing',
                where: {
                    lang:this.beans.readCookie('language.choice'),
                    type:'content'                       
                }});

                pricing.fetch({
                    success: function(collection,results,options){                       

                        $.each( results.results,function(index,result){
                            view = new PricingRoom({
                                model:new ParseModel(result)
                            });
                            that.$el.find('div.pricing-room').append(view.render().el);
                        });
                        
                    }
                });

            },
            call_header:function(){

              var that=this;
              
              var pricing = new ParseCollection({
                name: 'pricing',
                where: {
                    lang:this.beans.readCookie('language.choice'),
                    type:'header'                       
                }});

                pricing.fetch({
                    success: function(collection,results,options){                       

                        $.each( results.results,function(index,result){
                            view = new PoliciesContent({
                                model:new ParseModel(result)
                            });

                            that.$el.find('div.position-header-'+result.position).append(view.render().el);

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