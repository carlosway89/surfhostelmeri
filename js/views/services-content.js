define([
    'text!/templates/services-content.php',
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
            title:function(){return this.model.get('title');},
            facilities:function(){return this.model.get('facilities');},
            col:function(){return this.model.get('col');},
            index:function(){ return this.options.index; },
            kind:function(){
                switch(this.index()){
                    case 0:
                        return ' ';
                    break;
                    case 1:
                        return 'success';
                    break;
                    case 2:
                        return 'primary';
                    break;
                    case 3:
                        return 'danger';
                    break;
                    case 4:
                        return 'info';
                    break;
                    case 5:
                        return 'warning';
                    break;
                }
                
            }

        });
    }
);