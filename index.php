<!DOCTYPE html>
<html>
  <head>
    <title>Surf Hostel Meri</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="css/bootstrap.css" rel="stylesheet">
    <link href="css/font-awesome.min.css" rel="stylesheet">
    <link rel="stylesheet/less" href="css/styles.less" type="text/css" />
    <link href='http://fonts.googleapis.com/css?family=Dosis:400,300,200,500' rel='stylesheet' type='text/css'>

    <script src="js/jquery-1.9.1.min.js"></script>
    <script src="js/jquery-ui-1.9.2.custom.js"></script>
    <script src="js/jquery.tubular.1.0.js"></script>
    <script src="js/jquery.resizecrop-1.0.3.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/xo-validate.js"></script>
    <script src="js/less.js"></script>
    <script src="js/underscore.js"></script>
    <script src="js/handlebars.js"></script>
    <script src="js/backbone.js"></script>
    <script src="js/parse.js"></script>
    <script src="js/backbone-parse.js"></script>
    <script src="js/jquery-beat.min.js"></script>
    <script src="js/pretty.js"></script>
    <script src="js/script.min.js"></script>
    <script src="js/xo.js"></script>
    <script data-main="js/main" src="js/require.js"></script>

    <script type="text/javascript">
      var fadeDuration=1500;
      var fadeDuration1=600;
      var slideDuration=4500;
      var currentIndex=1;
      var nextIndex=1;

      $(document).ready(function()
      { 
        

        $('ul.carousel-inner-back .item').css({opacity: 0.0});
        $('ul.carousel-inner-back .item:nth-child('+nextIndex+')').addClass('show').animate({opacity: 1.0}, fadeDuration1);
        var timer = setInterval('nextSlide()',slideDuration);
        
      });

      function nextSlide(){
        nextIndex =currentIndex+1;
        if(nextIndex > $('ul.carousel-inner-back .item').length)
        {
          nextIndex =1;
        }
        $('ul.carousel-inner-back .item:nth-child('+nextIndex+')').addClass('show').animate({opacity: 1.0}, fadeDuration);
        $('ul.carousel-inner-back .item:nth-child('+currentIndex+')').animate({opacity: 0.0}, fadeDuration).removeClass('show');
        currentIndex = nextIndex;
      }


    </script>

  </head>

<body>
    
    <div id="wraper">
      <div id="carousel-backgroung" class="carousel-fade" >
        <!-- Wrapper for slides -->
        <ul class="list-none carousel-inner-back">
          <li class="item"><img  src="img/1.jpg" ></li>
          <li class="item"><img  src="img/2.jpg" ></li>
          <li class="item"><img  src="img/3.jpg" ></li>
          <li class="item"><img  src="img/4.jpg" ></li>
          <li class="item"><img  src="img/5.jpg" ></li>
        </ul>
        
      </div>

    </div>
    <div class="principal-page ">

      <div class="container">
        <div class="row">
          <div class="col-md-10 col-md-offset-1">
              <div class="menu">
                <ul class="list-inline nav-menu ">
                  
                  <!-- rest of menu-->
                </ul>

              </div>
          </div>
          
        </div>
        <div class="row">
          <div class="col-md-3 col-md-offset-8">
            <div class="dark-background text-center content-flag" style="display:none">              
                           
            </div>
            <br>
            
          </div>
        </div>
        <div class="row">
          <div class="col-md-10 col-md-offset-1">
            <div class="content-page" style="display:none">
                
            </div>
          </div>
        </div>                  
        
      </div>
      <footer class="footer-page visible-xs visible-sm">
          <ul class="list-inline nav-menu-sm">
            <li id="home" class="links">
              <a href="#home"><span class="glyphicon glyphicon-home"></span></a>
            </li>
            <li class="">
              <span class="separate-line">&nbsp;</span>
            </li>
            <li id="services" class="links">
              <a href="#services"><span class="glyphicon glyphicon-cutlery"></span></a>
            </li>
            <li class="">
              <span class="separate-line">&nbsp;</span>
            </li>
            <li id="gallery" class="links">
              <a href="#gallery"><span class="glyphicon glyphicon-camera"></span></a>
            </li>
            <li class="">
              <span class="separate-line">&nbsp;</span>
            </li>
            <li id="pricing" class="links">
              <a href="#pricing"><span class="glyphicon glyphicon-eye-open"></span></a>
            </li>
            <li class="">
              <span class="separate-line">&nbsp;</span>
            </li>
          </ul>
      </footer>

    </div>




</body>
</html>