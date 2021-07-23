// Fixed Header Start

    $(window).scroll(function () {
    
        if ($(window).scrollTop() >= 1) {
            $('.header').addClass('fixedHeader');
        } else {
            $('.header').removeClass('fixedHeader');
        }
    });
  
  // Fixed Header End

    $().ready(function(){
        $('.slick-carousel').slick({
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        centerPadding: "0px",
        dots: false,
        slidesToShow: 4,
        infinite: true
        });
    });

  // Sidebar Start

    $('.navbar-toggler').click(function () {
        if ($(this).parents('.navbar').find('.navbar-collapse').hasClass('show')) {
            $('.navbar-expand-md .navbar-collapse').css('left', '-250px');
        } else {
            $('.navbar-expand-md .navbar-collapse').css('left', '0px');
        }
    });
  
  // Sidebar End

  // Navbar Button Style Start

    $(document).ready(function(){
        $('.navbar-toggler').click(function(){
            if($(this).hasClass('active'))
            {
                $(this).removeClass('active')
            }
            else{
                $(this).addClass('active')
            }
        });
    });
  
  // Navbar Button Style End