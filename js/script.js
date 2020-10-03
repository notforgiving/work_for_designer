$(window).on('load', function () {
  $preloader = $('.loaderArea'),
    $loader = $preloader.find('.loader');
  $loader.fadeOut();
  $preloader.delay(550).fadeOut('slow');
});

  $('.menu-btn').on('click', function(e) {
    e.preventDefault;
    $(this).toggleClass('menu-btn_active');
    $('.mobil_menu').toggleClass('mobil_menu_active');
  });

  $(function(){
    $("a[href^='#']").click(function(){
            var _href = $(this).attr("href");
            $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
            return false;
    });

    new WOW().init();
});