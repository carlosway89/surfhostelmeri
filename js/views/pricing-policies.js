define([
    'text!/templates/pricing-policies.php',
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
            title:function(){ return this.model.get('title'); },
            description:function(){ return this.model.get('description'); }

        });
    }
);