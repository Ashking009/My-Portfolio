

$(window).bind('scroll',function(e){
    parallaxScroll();
});

function parallaxScroll(){
    var scr = $(window).scrollTop();
    var nel = $("#about").offset().top -$("#hero-img").height()
    
    var scrolled = $('#hero-img').length - $(window).scrollTop();
   var scrolled =document.getElementsByName('inner-parallax').length - $(window).scrollTop();
//    var scrolled =document.getElementsByName('hero-img').length - $(window).scrollTop();  
   $('.inner-parallax').css('top',(0-(scrolled*.23))+'px');
   if(scr< nel){
       $('.hero-img').css('top',(0-(scrolled*1.05))+'px');
       $('.hero-img').css('right',(0-(scrolled*.3))+'px');
    }
   
    {
        $('.hero-img').css('top',('top'-(scrolled*1.05))+'px');
        $('.hero-img').css('right',('right'-(scrolled*.3))+'px');
    }
   
  
//    $('.hero-img').css('width',('width' - (scrolled*0.001))+'px');
//    $('.hero-img').css('width =40%', '40% ' + parseInt(-scrolled) + 'px' + ', 0% ' + parseInt(-scrolled / 2) + 'px, center top');
  
  
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
   
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header-wrapper").style.height = "50px";
    document.getElementById("logo").style.width = "60px";
    document.getElementById("logo").style.padding = "5px 0";
    
    // document.getElementById("hero-img").style.width = "50px";

  } else {
    document.getElementById("header-wrapper").style.height = "100px";
    document.getElementById("logo").style.width = "120px";
    document.getElementById("logo").style.padding = "10px 0";
  }
}