import $ from 'jquery';
import 'what-input';

// Foundation JS relies on a global variable. In ES6, all imports are hoisted
// to the top of the file so if we used `import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = window.$ = $;
//require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
import './lib/foundation-explicit-pieces';

//import 'jgrowl';
//import 'tooltipster';
import 'magnific-popup';
import 'slick-carousel';

import './lib/foundation-datepicker.min.js';
import './lib/foundation-datepicker.min.ru.js';
import './lib/jquery.form.js';
import './lib/jquery.inputmask.min.js';
import './lib/parallax.min.js';


Foundation.Accordion.defaults.slideSpeed = 250;
Foundation.Accordion.defaults.multiExpand = true;
Foundation.Accordion.defaults.allowAllClosed = true;
Foundation.Dropdown.defaults.closeOnClick = true;
Foundation.Dropdown.defaults.hoverPane = true;
Foundation.Dropdown.defaults.hoverDelay = 150;
Foundation.DropdownMenu.defaults.autoclose = false;
Foundation.Drilldown.defaults.backButton = '<li class="js-drilldown-back"><a class="js-drilldown-back-link" tabindex="0">Назад</a></li>';
//Foundation.Drilldown.defaults.animationDuration	=	750;
//Foundation.Drilldown.defaults.animationEasing	=	'cubic-bezier(0.18, 0.89, 0.32, 1.27)';
Foundation.OffCanvas.defaults.trapFocus = true;
Foundation.OffCanvas.defaults.contentScroll = false;
Foundation.OffCanvas.defaults.autoFocus = true;
Foundation.OffCanvas.defaults.transition = 'overlap';

$(document).foundation();
$(document).ready(function(){
  //Отключаем ховер эффекты во время скролла => 60fps scroll
  var body = document.body,
      timer;

  window.addEventListener('scroll', function(event) {
    clearTimeout(timer);
    if(!body.classList.contains('disable-hover')) {
      body.classList.add('disable-hover')
    }
    timer = setTimeout(function(){
      body.classList.remove('disable-hover')
    }, 500);
  }, false);

  $.extend(true, $.magnificPopup.defaults, {
    mainClass: 'mfp-with-anim mfp-zoom-in',
    tClose: 'Закрыть',
    tLoading: 'Загрузка...',
    removalDelay: 300,
    gallery: {
      tPrev: 'Назад',
      tNext: 'Вперед',
      tCounter: '%curr% из %total%'
    },
    image: {
      Error: 'Невозможно загрузить <a href="%url%">изображение</a>'
    },
    ajax: {
      tError: 'Невозможно загрузить <a href="%url%">содержимое</a>',
    },
    callbacks: {
      open: function () {
        $('[data-close]').on('click', function (event) {
          event.preventDefault();
          $.magnificPopup.close();
        });
      }
    }
  });

  $('.gallery').each(function () {
    $(this).magnificPopup({
      gallery: {
        enabled: true
      },
      delegate: '.gallery-item',
      type: 'image',
      image: {
        markup: '<div class="mfp-figure mfp-with-anim">' +
          '<div class="mfp-close"></div>' +
          '<div class="mfp-img"></div>' +
          '<div class="mfp-title"></div>' +
          '</div>',
        cursor: 'null',
        verticalFit: true,
      },
      mainClass: 'mfp-zoom-in mfp-img-mobile',
      closeOnContentClick: false,
      closeBtnInside: true,
    });
  });
  $('.inline-popup').magnificPopup({
    type: 'inline',
    focus: '[autofocus]',
    callbacks: {
      //open: function() {
      //  $(this).find('[data-equalizer]').foundation(); // реинит эквалайзера после открытия окна
      //}
    }
  });
  $('.ajax-popup').magnificPopup({
    type: 'ajax',
    closeBtnInside: true,
    closeOnContentClick: false,
    removalDelay: 300,
    midClick: true,
    zoom: {
      enabled: true,
      duration: 300,
      easing: 'ease-in-out',
    }
  });
  $('.image-popup').magnificPopup({
    type: 'image',
    image: {
      markup: '<div class="mfp-figure mfp-with-anim">' +
        '<div class="mfp-close"></div>' +
        '<div class="mfp-img"></div>' +
        '<div class="mfp-title"></div>' +
        '</div>',
      cursor: 'null',
      verticalFit: true,
    }
  });
  $('.iframe-popup').magnificPopup({
    type: 'iframe',
    removalDelay: 160,
    preloader: true,
    fixedContentPos: false
  });

  $('.slick').slick({
    mobileFirst: true,
    autoplay: true,
    autoplaySpeed: 5000,
    lazyLoad: 'progressive',
    infinite: true,
    arrows: false,
    dots: false,
    slidesToShow: 1,
    cssEase: 'cubic-bezier(0.46,0.03,0.52,0.96)',
    speed: 640,
    prevArrow: '<button type="button" class="slick-prev"><svg viewbox="0 0 128 128"><use xlink:href="#chevron-thin-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg viewbox="0 0 128 128"><use xlink:href="#chevron-thin-right"></use></svg></button>',
  });
  
  $('[data-inputmask]').inputmask();

  $('[data-datepicker]').fdatepicker();
  expromptum();
});