const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 0);
})

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('open');
}

// Para controlar el slider de las imagenes del fondo
var backgrounds = [
    'url(../img/slider1.jpg)',
    'url(../img/slider2.jpg)',
    'url(../img/slider3.jpg)',
    'url(../img/slider4.jpg)'
];

var index = 0; // Índice para controlar el cambio de imagen

function changeBackground() {
    document.querySelector('.inicio').style.backgroundImage = backgrounds[index]; // Cambiar la imagen de fondo
    index = (index + 1) % backgrounds.length; // Index circular para volver al inicio al final del array
}

// Llamar a la función de cambio de imagen cada 5 segundos
setInterval(changeBackground, 5000);

// Precargar imágenes
backgrounds.forEach(function(image) {
  var img = new Image();
  img.src = image;
});


//Para hacer el carrusel de testimonios
jQuery(function($){
    $('.slider-testimonial').sss({
        slideShow : true,
        speed : 1500000
    });
});

/** Super Simple Slider by @intllgnt **/

;(function($, window, document, undefined ) {

    $.fn.sss = function(options) {
    
    // Options
    
        var settings = $.extend({
        slideShow : true,
        startOn : 0,
        speed : 3500,
        transition : 400,
        arrows : true
        }, options);
    
        return this.each(function() {
    
    // Variables
    
        var
        wrapper = $(this),
        slides = wrapper.children().wrapAll('<div class="sss"/>').addClass('ssslide'),
        slider = wrapper.find('.sss'),
        slide_count = slides.length,
        transition = settings.transition,
        starting_slide = settings.startOn,
        target = starting_slide > slide_count - 1 ? 0 : starting_slide,
        animating = false,
        clicked,
        timer,
        key,
        prev,
        next,
    
    // Reset Slideshow
    
        reset_timer = settings.slideShow ? function() {
        clearTimeout(timer);
        timer = setTimeout(next_slide, settings.speed);
        } : $.noop;
    
    // Animate Slider
    
        function get_height(target) {
        return ((slides.eq(target).height() / slider.width()) * 100) + '%';
        }
    
        function animate_slide(target) {
        if (!animating) {
        animating = true;
        var target_slide = slides.eq(target);
    
        target_slide.fadeIn(transition);
        slides.not(target_slide).fadeOut(transition);
    
        slider.animate({paddingBottom: get_height(target)}, transition,  function() {
        animating = false;
        });
    
        reset_timer();
    
        }};
    
    // Next Slide
    
        function next_slide() {
        target = target === slide_count - 1 ? 0 : target + 1;
        animate_slide(target);
        }
    
    // Prev Slide
    
        function prev_slide() {
        target = target === 0 ? slide_count - 1 : target - 1;
        animate_slide(target);
        }
    
        if (settings.arrows) {
        slider.append('<div class="sssprev"/>', '<div class="sssnext"/>');
        }
    
        next = slider.find('.sssnext'),
        prev = slider.find('.sssprev');
    
        $(window).load(function() {
    
        slider.css({paddingBottom: get_height(target)}).click(function(e) {
        clicked = $(e.target);
        if (clicked.is(next)) { next_slide() }
        else if (clicked.is(prev)) { prev_slide() }
        });
    
        animate_slide(target);
    
        $(document).keydown(function(e) {
        key = e.keyCode;
        if (key === 39) { next_slide() }
        else if (key === 37) { prev_slide() }
        });
    
        });
    // End
    
    });
    
    };
    })(jQuery, window, document);

    