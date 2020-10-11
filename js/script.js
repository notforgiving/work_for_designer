/*Обработчик прелодера*/
$(window).on('load', function () {//Пока грузится наша страница за кружком
  $preloader = $('.loaderArea'), //ищем элемент с таким классом (.loaderArea) и записываем в переменную (preloader)
  $loader =  $('.loader');//ищем элемент с таким классом (.loader) и записываем в переменную (loader)
  $preloader.delay(550).fadeOut('slow');//preloader.задерка(550мс).скроется медленно
  $loader.delay(650).animate({//loader.задерка(650мс).санимирует
    opacity: "1"//было у него opacity 0, Станет 1
  });
  $loader.delay(650).attr('style','display:block;')//loader.задерка(650мс).добавится атрибут style="display:block". 
                                                  //По факту, просто появится. Потому что изначально было display:none
});

/*Обработчик меню мобильного показать/скрыть*/
  $('.menu-btn').on('click', function(e) {//Элемент class="menu-btn".нажатие - > выполняем функцию
    e.preventDefault;//Отменяем стандартное действие для ссылки с классом menu-btn/то есть переход на другую страницу
    $(this).toggleClass('menu-btn_active');//элементу с классом .menu_btn (этому же элементу) добавляем класс menu-btn_active
    $('.mobil_menu').toggleClass('mobil_menu_active'); //элементу с классом .mobil_menu добавляем класс mobil_menu_active
  });

  /*Обработчик плавной отправки при нажатии на контакты*/
  $(function(){
    $("a[href^='#']").click(function(){//Ищет ссылки у которых href начинается с #. 
                                      //Решетка это значит, что мы должны попасть на какую то часть страницы
            var _href = $(this).attr("href");//_href это переменная в которую мы записываем значение атрибута href
            $("html, body").animate({//мы анимируем наше тело сайта
              scrollTop: $(_href).offset().top+"px"//в качестве анимации у нас scrollTop. Прокрутка вниз к верхней части элемента
            });//Короче offset ищет координаты верхней точки элемента с # к которому мы плавно хотим поехать
            return false;
    });

    /*Инициализация срабатывания анимации при скроле*/
    new WOW().init();
});