$(function() {
    $("body").niceScroll({
      scrollspeed: 80,
      cursorcolor:"rgb(120, 86, 138)"
    });
});
$('a[href*="#"]').on('click', function (e) {
    e.preventDefault();

    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 500, 'linear');
});

/*** navbar effects with scroll in all screens ***/




$(function(){
  'use strict';

  //adjust slider height
  var winH   =$(window).height(),
      upperH =$('.upper-nav').innerHeight(),
      navH   =$('.navbar').innerHeight()
      $('.slider , .carousel-item').height(winH - ( upperH + navH ));
      //animated
     //shuffle
     $('.featred-work ul li').on('click', function() {
       $(this).addClass('active').siblings().removeClass('active');

//shuffle
if ($(this).data('class') === 'ALL'){
  $('.shuffle-img .col-sm').css('opacity',1);
}else{

  $('.shuffle-img .col-sm').css('opacity', '0.08' );
  $($(this).data('class')).parent().css('opacity',1);
}
///start counter






    /*   $("all").on("click", function(){
        shuffleInstance.filter();
     });
     $(".Online Markiting").on("click", function(){
        shuffleInstance.filter('animal');
     });
     $(".WebSite").on("click", function(){
        shuffleInstance.filter('city');
     });
     $(".Logo&Branding").on("click", function(){
        shuffleInstance.filter('nature');
     });*/
     });
     $(document).ready(function(){
      $('.counter-value').each(function(){
          $(this).prop('Counter',0).animate({
              Counter: $(this).text()
          },{
              duration: 7500,
              easing: 'swing',
              step: function (now){
                  $(this).text(Math.ceil(now));
              }
          });
      });
  });
  $('#scroll-to-top-btn').each(function(){
   $(this).click(function(){
       $('html,body').animate({ scrollTop: 0 }, 1000);
       return false;
   });
});


});
//scroll to top
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("scroll-to-top-btn").style.display = "block";
} else {
    document.getElementById("scroll-to-top-btn").style.display = "none";
}
}
$('#scroll-to-top-btn').each(function(){
   $(this).click(function(){
       $('html,body').animate({ scrollTop: 0 }, 1000);
       return false;
   });
});