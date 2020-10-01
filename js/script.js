  jQuery(document).ready(function($) {
    $(window).on('load', function () {
      var $preloader = $('.loaderArea'),
          $loader = $preloader.find('.loaderArea');
      $loader.fadeOut();
      $preloader.delay(250).fadeOut(200);
    });
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