define([
    'text!/templates/admin.php',
    'views/admin-home',
    'views/admin-services',
    'views/admin-gallery',
    'views/admin-pricing',
    'beans',
    'collections/parse',
    'models/parse',
    'channel'
],
    function(tmpl,AdminHome,AdminServices,AdminGallery,AdminPricing,Beans,ParseCollection,ParseModel,Channel) {
        return Backbone.View.extend({
            template: Handlebars.compile(tmpl),
            beans: new Beans,
            debug: true,
            array:[],
            _home_address:[],
            events: {
            },
            initialize: function() {
                this.render();
                this.call_pages();
            },
            call_pages:function(){

                view_gallery = new AdminGallery();

                $('div.tab-content-nagivation').append(view_gallery.render().el);

                view_home = new AdminHome();

                $('div.tab-content-nagivation').append(view_home.render().el);

                // view_services = new AdminServices();

                // $('div.tab-content-nagivation').append(view_services.render().el);

                
                
                // view_pricing = new AdminPricing();

                // $('div.tab-content-nagivation').append(view_pricing.render().el);

            },
            render: function() {
                this.$el.html( Handlebars.compile( tmpl)(this));
                return this;
            }

        });
    }
);