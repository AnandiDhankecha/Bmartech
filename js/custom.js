$(document).ready(function(){

  $('#testimonail').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    dots:true, 
    responsive:{
        0:{
            items:1,
            center:false,
        },
        800:{
            items:1
        },
        1000:{
            items:2
        }
    }
});
// feature slider
$(".feature-slider").owlCarousel({
  items:4,
  loop:true,
  autoplay:true,
  dots:true,
  nav:false,
  margin:30,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    992: {
      items: 3,
    },
    1200: {
      items: 4,
    }
  }
});


  
       $('.bottom_top').click(function () {
        $('html, body').animate({
            scrollTop: '0px'
        },800);
        return false;
    });
      $('.bottom_top').hide();
  
  $(window).scroll(function(){
      if($(window).scrollTop() > 200){
          $('.bottom_top').fadeIn();}
      else{
          $('.bottom_top').fadeOut();}
      });

    $(window).scroll(function(){
      var sticky = $('.sticky'),
          scroll = $(window).scrollTop();
    
      if (scroll >= 100) sticky.addClass('fixed');
      else sticky.removeClass('fixed');
    });


  
   

// mobile menu
      $('.mobile-menu').on('click', function(){
        $('.main-menu').toggle('slow');
      });

      // one page nav
      $('.main-menu nav ul').onePageNav({
        currentClass: "active",
        scrollSpeed: 1200
      });

        // sticky menu
        $(window).on("scroll", function() {
          var scroll = $(window).scrollTop();
            if (scroll >= 30) {
              $(".header-wrapper").addClass("sticky");
            } else {
              $(".header-wrapper").removeClass("sticky");
            }
        });

      // testimonial slider
      $('#testimonail').owlCarousel({
        loop:true,
        margin:20,
        nav:false,
        dots:true, 
        responsive:{
            0:{
                items:1
            },
            800:{
                items:2
            },
            1000:{
                items:2
            }
        }
    })
    // header fixed
    $(window).scroll(function(){
      var sticky = $('.sticky'),
          scroll = $(window).scrollTop();
    
      if (scroll >= 100) sticky.addClass('fixed');
      else sticky.removeClass('fixed');
    })
       
});