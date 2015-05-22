$(function(){
    $('.type_order li').click(function(){      
         $(this).addClass('active').siblings().removeClass('active');
    })
});

$(function(){
    $("#slides").slidesjs({
    width: 940,
    height: 470,
    
    navigation: {
        active: false,
        effect: "slide"
        },
    
    pagination: {
        active: true,
        effect: 'slide'
        },
    
    play: {
        active: false,
        effect: 'slide',
        interval: 2000,
        auto: true,
        swap: true,
        restartDelay: 1000
        }
    }); 
});

$(document).ready(function(){
  $('.slide_bot').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay:true,
      autoplaySpeed:2000,
      dots:true,

  });
});