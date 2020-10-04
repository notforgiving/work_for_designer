/*Обработчик прелодера*/
$(window).on('load', function () {
  $preloader = $('.loaderArea'),
  $loader = $preloader.find('.loader');
  $loader.delay(550).fadeOut('slow');
  $preloader.delay(550).fadeOut('slow');
  $( ".loader" ).delay(650).animate({
    display: "block",
    opacity: "1"
  });
  $('.loader').delay(650).attr('style','display:block;')
});

/*Обработчик меню мобильного показать/скрыть*/
  $('.menu-btn').on('click', function(e) {
    e.preventDefault;
    $(this).toggleClass('menu-btn_active');
    $('.mobil_menu').toggleClass('mobil_menu_active');
  });

  /*Обработчик плавной отправки при нажатии на контакты*/
  $(function(){
    $("a[href^='#']").click(function(){
            var _href = $(this).attr("href");
            $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
            return false;
    });

    /*Инициализация срабатывания анимации при скроле*/
    new WOW().init();
});