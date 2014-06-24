define([
    'text!/templates/tab-gallery-images.php',
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
            tagName:'li',
            events: {
                'click .photo-delete':'delete_photo'
            },
            initialize: function() {


            },
            delete_photo:function(){
                
                if(confirm("Are you sure you want to delete this picture?")){
                    
                    var album = new ParseModel({name: 'album'});
                    this.$el.fadeOut();
                    album.set('objectId',this.objectid());

                    album.destroy({
                        success: function(model, response) {
                            Channel.trigger('update.album'); 
                        }
                    });     

                }else{
                    
                    return false;
                
                }

                         

            },
            objectid:function(){ return this.model.get('objectId'); },
            picture:function(){ return this.model.get('picture').url;},
            render: function() {
                this.$el.html( Handlebars.compile( tmpl)(this));
                return this;
            }

        });
    }
);