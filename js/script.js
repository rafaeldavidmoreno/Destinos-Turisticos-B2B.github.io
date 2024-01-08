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

var backgrounds = [
    'url(../img/slider1.JPG)',
    'url(../img/slider2.JPG)',
    'url(../img/slider3.JPG)',
    'url(../img/slider4.JPG)'
];

var index = 0; 

function changeBackground() {
    document.querySelector('.inicio').style.backgroundImage = backgrounds[index]; 
    index = (index + 1) % backgrounds.length; 
}

setInterval(changeBackground, 5000);

backgrounds.forEach(function(image) {
  var img = new Image();
  img.src = image;
});

jQuery(function($){
    $('.slider-testimonial').sss({
        slideShow : true,
        speed : 1500000
    });
});

(function($, window, document, undefined ) {

    $.fn.sss = function(options) {
   
        var settings = $.extend({
        slideShow : true,
        startOn : 0,
        speed : 3500,
        transition : 400,
        arrows : true
        }, options);
    
        return this.each(function() {
       
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
    
        reset_timer = settings.slideShow ? function() {
        clearTimeout(timer);
        timer = setTimeout(next_slide, settings.speed);
        } : $.noop;
    
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
    
        function next_slide() {
        target = target === slide_count - 1 ? 0 : target + 1;
        animate_slide(target);
        }

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
    
    });
    
    };
    })(jQuery, window, document);

    
