define([
    'text!/templates/admin-home.php',
    'views/language-panel',
    'views/language-panel-choice',
    'beans',
    'collections/parse',
    'models/parse',
    'channel'
],
    function(tmpl,LanguagePanel,LanguagePanelChoice,Beans,ParseCollection,ParseModel,Channel) {
        return Backbone.View.extend({
            template: Handlebars.compile(tmpl),
            beans: new Beans,
            debug: true,
            array:[],
            _home_address:[],
            className:'tab-pane fade in active',
            events: {
            },
            initialize: function() {
                this.call_address();
            },
            call_languages:function(){

              var that=this;
              
              var languages = new ParseCollection({
                name: 'languages'});

                languages.fetch({
                    success: function(collection,results,options){                       

                        $.each( results.results,function(index,result_lang){

                            /*enable language */
                            view = new LanguagePanel({
                                model:new ParseModel(result_lang)
                            });

                            $('ul.language-panel').append(view.render().el);

                            /*choice language */
                            var content=new ParseCollection({
                                name: 'home',
                                where:{
                                    lang:result_lang.lang
                                }
                            });

                            content.fetch({
                                success: function(collection,results,options){ 
                                    $.each( results.results,function(index,result){
                                        
                                        view = new LanguagePanelChoice({
                                            model:new ParseModel(result_lang),
                                            _model:new ParseModel(result),
                                            _address:new ParseModel(that._home_address[0])
                                        });
                                        var content=that.$el.find('div.language-panel-choice');
                                        content.append(view.render().el);
                                        if (result.lang=='en') {
                                            content.find('#waiting-preloader').remove();
                                        }
                                        

                                    });
                                },
                                error:function(){
                                    that.call_languages();
                                }
                            });

                            

                        });
                        
                    },
                    error:function(){
                        that.call_languages();

                    }
                });  

            },
            call_address:function(){

              var that=this;
              
              var home_address = new ParseCollection({name: 'home_address'});
              this.beans.preloader('div.language-panel-choice','ajax-loader','panel');

                home_address.fetch({
                    success: function(collection,results,options){                       

                        $.each( results.results,function(index,result){
                            that._home_address.push(result);                            
                        });
                        that.call_languages();
                        
                    },
                    error:function(){
                        that.call_address();
                    }
                });
            },
            render: function() {
                this.$el.html( Handlebars.compile( tmpl)(this));
                this.$el.attr('id','home');
                return this;
            }

        });
    }
);