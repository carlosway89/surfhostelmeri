define([
    'text!/templates/home-picture.php',
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
            picture:function(){ return this.model.get('picture').url; },
            position:function(){ return this.model.get('position'); },
            page:function(){  return this.model.get('page'); }
        });
    }
);