define([
    'text!/templates/language-panel-choice.php',
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
            className:'tab-pane',
            events: {
                'click a.btn-save':'save_update'
            },
            initialize: function() {
                
            },
            save_update:function(){

                var that=this;
                this.$el.find('.form-control').attr('disabled','disabled');
                this.$el.find('.btn-save').attr('disabled','disabled').html('Please wait...');

                var _home = new ParseModel({ name: 'home'});
                var _home_address = new ParseModel({ name: 'home_address'});
                var message=that.$el.find('div.messages');

                _home.save(this.get_data_home(),{
                    success: function(model,result,options){

                        that._model=model;
                        console.log(model)

                        _home_address.save(that.get_data_address(),{
                            success:function(model,result,options){

                                that.beans.user_alert('success',message,'Good, was saved successfully!!');
                                that.options._address=model;
                                console.log(model)
                                setTimeout(function(){
                                    // that.render();
                                    window.location.reload()
                                },3500);


                            },
                            error:function(){
                                that.beans.user_alert('error',message,'Upps, something was wrong try again!!');
                                setTimeout(function(){
                                    that.render();
                                },3500);
                            }
                        });

                        
                       
                    },
                    error: function(model,xhr,options){
                        that.beans.user_alert('error',message,'Upps, something was wrong try again!!');
                        setTimeout(function(){
                                    that.render();
                        },3500);
                    }
                });

                

            },
            get_data_home:function(){
                var data={
                    objectId:this.objectid_home(),
                    principal_text:this.$el.find('#principal_text').val(),
                    title_secondary:this.$el.find('#title_secondary').val(),
                    how_get:this.$el.find('#how_get').val(),
                    picture_text_1:this.$el.find('#picture_text_1').val(),
                    picture_text_2:this.$el.find('#picture_text_2').val()

                };
                return data;
            },
            get_data_address:function(){
                var _data={
                    objectId:this.objectid_address(),
                    address:this.$el.find('#address').val(),
                    phone_1:this.$el.find('#phone_1').val(),
                    phone_2:this.$el.find('#phone_2').val(),
                    email:this.$el.find('#email').val(),
                    facebook:this.$el.find('#facebook').val()
                };
                return _data;
            },        
            render: function() {
                this.$el.html( Handlebars.compile( tmpl)(this));
                this.$el.attr('id',this.language());

                if(this.lang()=='en')
                    this.$el.addClass('active');

                return this;
            },
            objectid:function(){ return this.model.attributes.objectId;},
            lang:function(){ return this.model.attributes.lang;},
            flag:function(){ return this.model.attributes.flag;},
            language:function(){ return this.model.attributes.type; },
            type:function(){ return this.model.attributes.type.toUpperCase();},
            enabled:function(){ return this.model.attributes.enabled;},
            objectid_home:function(){ return this.options._model.attributes.objectId; },
            principal_text:function(){ return this.options._model.attributes.principal_text; },
            title_secondary:function(){ return this.options._model.attributes.title_secondary; },
            how_get:function(){ return this.options._model.attributes.how_get; },
            picture_text_1:function(){ return this.options._model.attributes.picture_text_1; },
            picture_text_2:function(){ return this.options._model.attributes.picture_text_2; },
            objectid_address:function(){ return this.options._address.attributes.objectId; },
            address:function(){ return this.options._address.attributes.address; },
            phone_1:function(){  return this.options._address.attributes.phone_1; },
            phone_2:function(){ return this.options._address.attributes.phone_2;  },
            email:function(){ return this.options._address.attributes.email; },
            facebook:function(){ return this.options._address.attributes.facebook; }


        });
    }
);