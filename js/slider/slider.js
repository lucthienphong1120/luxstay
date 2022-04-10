

$(document).ready(function() {
// Banner Slider
  $('#banner-slider').owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    animateOut: 'fadeOut',
  });
// Location Slider
  $('#content-slider').owlCarousel({
    items: 5,
    loop: true,
    margin: 16,
    nav : true,
    navText:[
          "<i class='fa fa-angle-left   owl__nav-icon'>",
          "<i class='fa fa-angle-right  owl__nav-icon'>"
          ],
    responsive:{
        0:{
            items:2
        },
        600:{
          items:3
        },
        768:{
            items:3
        },
        1024:{
          items:4         
        },
        1239:{
            items:5
        }
    }
  });
// Promotion Slider  
$('#promotion-slider').owlCarousel({
  items: 3,
  loop: true,
  margin: 16,
  responsive:{
    0:{
        items:1
    },
    600:{
      items:1
    },
    768:{
        items:1
    },
    1024:{
      items:3      
    },
  }
});
// Suggest Slider 
$('#suggest-slider').owlCarousel({
  items: 4,
  loop: true,
  margin: 16,
  nav : true,
  navText:[
        "<i class='fa fa-angle-left   owl__nav-icon'>",
        "<i class='fa fa-angle-right  owl__nav-icon'>"
        ],
  responsive:{
      0:{
          items:1
      },
      600:{
        items:2
      },
      768:{
          items:3
      },
      1024:{
        items:4         
      },
      1239:{
          items:4
      }
  }
});
// Explore Slider
$('#explore-slider').owlCarousel({
  items: 3,
  loop: true,
  margin: 16,
  nav: true,
  navText:[
        "<i class='fa fa-angle-left   owl__nav-icon'>",
        "<i class='fa fa-angle-right  owl__nav-icon'>"
        ],
  responsive:{
      0:{
          items:1
      },
      600:{
        items:1
      },
      768:{
          items:2
      },
      1024:{
        items:3        
      },
      1239:{
          items:3
      }
  }
});
// Tutorial Slider  
$('#tutorial-slider').owlCarousel({
  items: 3,
  loop: true,
  margin: 16,
  nav: true,
  navText:[
    "<i class='fa fa-angle-left   owl__nav-icon'>",
    "<i class='fa fa-angle-right  owl__nav-icon'>"
    ],
  responsive:{
    0:{
        items:1
    },
    600:{
      items:1
    },
    768:{
        items:2
    },
    1024:{
      items:3      
    },
  }
});
// 
});

// Move on Top
$(window).scroll(function() {
    if ($(this).scrollTop() >= 300) {
      $('.move-on-top-btn').fadeIn();
    }
    else{
      $('.move-on-top-btn').fadeOut();
    }
});

$('.move-on-top-btn').click(function() {
  $('html, body').animate({scrollTop: 0}, 1500);
});
  