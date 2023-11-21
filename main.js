// this code to do transition from home section to about section when clicking on the 'about' in navbar

$(document).ready(function() {
    // Smooth scroll to the 'about' section link
    $('nav a[href="#about"]').on('click', function(event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: $('#id').offset().top
      },500); // Adjust the animation speed 
    })
  })


    // this code to do transition from about section to sell section 
    $(document).ready(function() {
      $('nav a[href="#sellMyCar"]').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: $('#sell').offset().top
        },0) 
      })
    })

      // this code to do transition from about section to sell section 
      $(document).ready(function() {
        $('nav a[href="#sellold"]').on('click', function(event) {
          event.preventDefault();
          $('html, body').animate({
            scrollTop: $('#sell1').offset().top
          },0) 
        })
      })

     
     
      


   
