/*$(window).on('load', function () {
    $preloader = $('.loaderArea'),
    $loader = $preloader.find('.loader');
    $loader.fadeOut();
    $preloader.delay(2000).fadeOut('slow');
  });*/

  jQuery(document).ready(function($) {
    $(window).on('load', function () {
      var $preloader = $('.loaderArea'),
          $loader = $preloader.find('.loaderArea');
      $loader.fadeOut();
      $preloader.delay(250).fadeOut(200);
    });
  });