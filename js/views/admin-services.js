define([
    'text!/templates/admin-services.php',
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
            className:'tab-pane fade',
            events: {
            },
            initialize: function() {
            },
            render: function() {
                this.$el.html( Handlebars.compile( tmpl)(this));
                this.$el.attr('id','services');
                return this;
            }

        });
    }
);