define([
    'text!/templates/preloader.php',
    'beans',
    'models/parse',
    'collections/parse',
    'channel'
],
    function(tmpl,Beans,ParseModel,ParseCollection,Channel) {
        return Backbone.View.extend({
            beans: new Beans,
            debug: false,
            template: Handlebars.compile(tmpl),
            events: {
            },
            initialize: function() {
            },
            type:function(){ return this.options.type?this.options.type:'';  },
            action:function(){  return this.options.action?this.options.action:''; },
            panel:function(){
                return this.action()=='panel'?'../':'';
            },
            render: function() {
                this.$el.html( Handlebars.compile( tmpl)(this));
                this.$el.addClass('text-center');
                this.$el.attr('id','waiting-preloader');
                return this;
            }
        });
    }
);