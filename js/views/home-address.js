define([
    'text!/templates/home-address.php',
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
            events: {
            },
            initialize: function() {
                
            },
            render: function() {
                this.$el.html( Handlebars.compile( tmpl)(this));
                this.$el.fadeIn(2000);
                return this;
            },
            address:function(){ return this.model.get('address'); },
            phone_1:function(){  return this.model.get('phone_1'); },
            phone_2:function(){ return this.model.get('phone_2');  },
            email:function(){ return this.model.get('email'); },
            facebook:function(){ return this.model.get('facebook'); }
        });
    }
);