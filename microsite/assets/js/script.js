$(document).ready(function() {

    $('.fade').slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      slidesToShow: 1, // Show one slide at a time
      slidesToScroll: 1, // Scroll one slide at a time
      autoplay: true,
      autoplaySpeed: 2000
    });
  
  });