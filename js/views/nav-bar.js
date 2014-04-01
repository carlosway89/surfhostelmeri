define([
    'text!/templates/nav-bar.php',
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
            className: 'links hidden-xs hidden-sm',
            tagName: 'li',
            events: {
            },
            initialize: function() {
            },
            render: function() {
                this.$el.html( Handlebars.compile( tmpl)(this));
                
                this.$el.fadeIn(2000);
                this.$el.attr('id',this.url());
                return this;
            },
            url:function(){ return this.model.attributes.url;},
            text:function(){ return this.model.attributes.text;}

        });
    }
);