define([
    'text!/templates/pricing-room.php',
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
            className: 'col-md-4',
            array:[],
            events: {
            },
            initialize: function() {
            },
            render: function() {
                this.$el.html( Handlebars.compile( tmpl)(this));
                this.call_image();
                this.$el.fadeIn(2000);
                return this;
            },
            call_image:function(){

              var that=this;
              
              var pictures = new ParseCollection({
                name: 'pictures',
                where: {
                    page:'pricing'                       
                }});

                pictures.fetch({
                    success: function(collection,results,options){                     
                        $.each( results.results,function(index,result){
                            that.$el.find('img.number-room-'+result.position).attr('src',result.picture.url);
                        });
                        
                    }
                });

            },
            title:function(){ return this.model.get('title'); },
            description:function(){ return this.model.get('description'); },
            price:function(){ return this.model.get('price'); },
            private:function(){ return this.model.get('private'); },
            language:function(){
                switch(this.lang()){
                    case 'en' :
                        return '';
                    break;
                    case 'ge' :
                        return 'german.';
                    break;
                    case 'fi' :
                        return 'finnish.';
                    break;
                    case 'du' :
                        return 'dutch.';
                    break;
                    case 'fr' :
                        return 'french.';
                    break;
                    case 'sp' :
                        return 'spanish.';
                    break;
                }
            },
            lang:function(){ return this.model.get('lang');  },
            room:function(){ return this.model.get('room');  },
            get_date_to:function(){
                var d = new Date();
                var month = d.getMonth()+1;
                var day = d.getDate()+5;

                var output = d.getFullYear() + '/' +
                    (month<10 ? '0' : '') + month + '/' +
                    (day<10 ? '0' : '') + day;

                return output;
            },
            get_date_from:function(){
                var d = new Date();
                var month = d.getMonth()+1;
                var day = d.getDate()+2;

                var output = d.getFullYear() + '/' +
                    (month<10 ? '0' : '') + month + '/' +
                    (day<10 ? '0' : '') + day;
                return output;
            }

        });
    }
);