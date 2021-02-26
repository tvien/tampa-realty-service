$( document ).ready(function() {

  // jQuery Object Vars
  var $win = $(window);
  var $nav = $('#fixedNav');
  var $navBtn = $('#nav-button');
  var $logos = $('.logos');
  var $navLinks = $('nav li a');
  var $navUL = $('#navlist');
  var $navSubUL = $('.dropdown-menu');
  var $buttonNav = $('#dropdownMenu1')
  var $bannerlogo = $('#bannerLogo');
  var $bannerPhrase = $('#bannerPhrase');
  var $slider = $('.slider-inner');
  var $bannerh1 = $('#bannerH1');
  var $catalog = $('#catalogsec .col-sm-3 img');
  var $catalogsec = $('#catalogsec');

  //Initialize css properties





  // Description: Fades in the main logo once document is loaded
  // and fires the phraseSlider after 8 seconds.
  $bannerlogo.fadeIn(0, function(){
    $bannerPhrase.fadeIn(250);
    setInterval(phraseSlider, 4000);
  });

  // Description: This function fires once the banner logo fades in
  // and gets a phrase from the bottom array to alternate phrases.
  // New phrases may be entered in array below   ---v
  // FadeIn/Out default speed: 500ms
  // Initial default phrase: i = 5
  var i = 5;
  var phrase = ["Browse our current listings", "List your home", "Find your home's value", "Read the local walk score",
  "Browse the local schools","Find your dream home"];
  function phraseSlider() {
    $bannerPhrase.fadeOut(250, function(){
      $bannerPhrase.text(phrase[i%phrase.length]);
    });
    $bannerPhrase.fadeIn(250);
    i++;
  };





  // Description: When user scroll down from the top, the
  // color scheme of the navigation bar changes for visibility
  $win.scroll(toggle_navColor);
  function toggle_navColor(){
    var scroll = $(this).scrollTop();
    //console.log(scroll);
    if(scroll > 0){
      toWhiteBG();
    }else{
      toDarkBG();
    }
  }





  // // Description: Slides each quick link catalog up with the slide animation
  // // effect. Currently in progress...
  // $win.scroll(slideCatalog);
  // var si = 0;
  // function slideCatalog(){
  //   if(si < 4){
  //     var scrollBottom = $(this).scrollTop() + $(this).height();  //current y-pos of bottom window
  //     var startSlide = $catalog.eq(si).offset().top + $catalog.eq(si).height(); //calculates when to start the slide animation
  //
  //     // console.log("scrollBOT: ",scrollBottom);
  //     // console.log("catalog height: ", $catalog.height());
  //     //console.log("catalog sec: ", si, " startslide: ", startSlide);
  //
  //     if(scrollBottom >= startSlide){
  //       si++;
  //     }
  //   }
  // }



  // BANNER SLIDESHOW FUNCTION
  // Description: This function creates the slide show effect on the
  // homepage banner.
  var i1 = 0;
  setInterval(function () {
      if (i1 > 4) {                  // Reset after 1st 15 pics have slided
          $slider.css("left", "0px");
          i1 = 0;
      }

      $slider.animate({             // Animates sliding effect by adding 20% to right.
          left: "-=100%"            //this value must change when more slides are added. Default slides:5; Default left: 100%
      },
      {
        duration: 725,              //Sync Speed: $bannerPhrase fadein + $bannerPhrase fddeout + $bannerLogo fadein +
        step: function(){
          jQuery(window).trigger('resize').trigger('scroll'); // *Required refreshes for parallax + slideshow animations
        }
      });
      i1++;                          // Increments after each slide effect
  }, 4000);


















  function toWhiteBG() {
    $nav.addClass('whiteBG').removeClass('darkBG');
    $navLinks.parent().addClass('underlineLinkColor-black').removeClass('underlineLinkColor-white');
    $buttonNav.css('color', 'black');
    $navLinks.css('color', 'black');
    $navBtn.css('color', 'black');
    $logos.eq(0).fadeOut(0).css("display", "none");
    $logos.eq(1).fadeIn(0);
    $navUL.css('background-color', 'transparent');
    $navSubUL.css('background-color', 'white')


  };

  function toDarkBG() {
    $nav.addClass('darkBG').removeClass('whiteBG');
    $navLinks.parent().addClass('underlineLinkColor-white').removeClass('underlineLinkColor-black');
    $buttonNav.css('color', 'black');
    $navLinks.css('color', 'white');
    $navBtn.css('color', 'white');
    $logos.eq(1).fadeOut(0).css("display", "none");
    $logos.eq(0).fadeIn(0);
    $navSubUL.css('background-color', '#0A2340')

    if($win.width() > 767-18){
      $navUL.css('background-color', 'transparent');

    } else {
      $navUL.css('background-color', '#0A2340');

    }

  };



});
