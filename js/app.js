 define([
     'router',
     'globals',
     'beans',
     'channel'
     ], function(AppRouter,Globals,Beans,Channel){

     var initialize = function(){
         var beans = new Beans;
         var debug = false;
         var $this = this;
         require(['views/nav-bar','models/parse','collections/parse'],
                function(NavBar,ParseModel,ParseCollection){
                    var ul_view=$('ul.nav-menu');
                    var separate='<li class="hidden-xs hidden-sm show-lines" style="display:none !important"><span class="separate-line">&nbsp;</span></li>';
                    var nav = new ParseCollection({
                    name: 'navbar',
                    where: {
                        lang:'en'                        
                    }});
                    nav.fetch({
                        success: function(collection,results,options){
                            $.each( results.results,function(index,result){
                                view = new NavBar({
                                    model:new ParseModel(result)
                                });
                                ul_view.append(separate).find('.show-lines').fadeIn(2000);
                                ul_view.append( view.render().el);
                            });
                            
                        }
                    });
                    

                 });


        AppRouter.initialize(); 
  
    };

     return {
         initialize: initialize
     };
     // What we return here will be used by other modules
});