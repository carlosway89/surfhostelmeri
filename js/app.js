 define([
     'router',
     'globals',
     'beans',
     'channel'
     ], function(AppRouter,Globals,Beans,Channel){
     var language=function(){

        var beans = new Beans;
        var debug = false;
        var that = this;

        require(['views/nav-bar','models/parse','collections/parse'],
            function(NavBar,ParseModel,ParseCollection){
                var ul_view=$('ul.nav-menu');
                var logo='<li><a class="position-logo text-center" style="display:none !important"><img class="img-responsive logo" src="img/logo_shm.png"><label>SURF HOSTEL MERI</label></a></li>';
                var separate='<li class="hidden-xs hidden-sm show-lines" style="display:none !important"><span class="separate-line">&nbsp;</span></li>';
                
                ul_view.empty();

                ul_view.append(logo).find('.position-logo').fadeIn(1000);

                var nav = new ParseCollection({
                name: 'navbar',
                limit: 4,
                where: {
                    lang:beans.readCookie('language.choice')                       
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
     };
     var initialize = function(){
         var beans = new Beans;
         var debug = false;
         var that = this;
         
         
         beans.createCookie('language.choice','en',10);
         
         Parse.initialize('PudrdGU0QlTFG1zsyMuFD3pYRAZncLN8Nw7wbRK2','fS2ZEabMP6LNKmXWi36eXcmqnq1ZEuu2UGDiv8Pc');

         if ( window.location.pathname!='/panel/' ){

            require(['views/language','models/parse','collections/parse'],
                function(Language,ParseModel,ParseCollection){
                    var lng_view=$('div.content-flag');
                    var lang = new ParseCollection({
                    name: 'languages',
                    limit: 6,
                    sort: 'createdAt',
                    where: {
                        enabled:true                       
                    }});

                    lang.fetch({
                        success: function(collection,results,options){
                            $.each( results.results,function(index,result){
                                view = new Language({
                                    model:new ParseModel(result)
                                });
                                lng_view.append( view.render().el);
                            });
                            $('.content-flag').fadeIn();
                            $('.flags:first').addClass('flag-actived');
                            
                        }
                    });
                    

                 });


                language();

                Channel.on('change.language.bar',function(){
                    language();
                    $('.flags').removeClass('flag-actived');
                });
         }



        AppRouter.initialize(); 
  
    };

     return {
         initialize: initialize
     };
     // What we return here will be used by other modules
});