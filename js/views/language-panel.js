define([
    'text!/templates/language-panel.php',
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
            tagName: 'li',
            className:'border',
            events: {
                'click a.dis':'put_disabled',
                'click a.en':'put_enabled'
            },
            initialize: function() {
                
            },
            put_enabled:function(){
                
                this.update_lang('enabled');

            },
            put_disabled:function(){
                this.update_lang('disabled');

            },
            update_lang:function(action){
                
                var that=this;
                var lang = new ParseModel({ name: 'languages'});
                lang.set('objectId',this.objectid());
                lang.set('enabled',action=='enabled'?true:false);
                lang.save(null,{
                    success: function(model,result,options){
                        that.enabled=action=='enabled'?true:false;
                        that.render();
                       
                    },
                    error: function(model,xhr,options){
                        
                    }
                });
            },          
            render: function() {
                this.$el.html( Handlebars.compile( tmpl)(this));
                this.$el.attr('style','display:inline-block');                
                this.$el.fadeIn(2000);
                return this;
            },
            objectid:function(){ return this.model.attributes.objectId;},
            lang:function(){ return this.model.attributes.lang;},
            flag:function(){ return this.model.attributes.flag;},
            type:function(){ return this.model.attributes.type.toUpperCase();},
            enabled:function(){ return this.model.attributes.enabled;},


        });
    }
);