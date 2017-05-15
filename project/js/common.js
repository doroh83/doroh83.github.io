var owl = $(".slider");
owl.owlCarousel({
    loop: true,
    margin:50,
    center: true,
    items:1,
    itemClass: "item-slider",
    loadedClass:"sliderLoadedClass",
    dragClass:"sliderDragClass",
    stageClass:"sliderStageClass",
    stageOuterClass:"sliderStageOuterClass",
    nav: false,
    navContainerClass:"sliderNavClass",
    navClass:[ 'slider-prev', 'slider-next' ],
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    dotsClass:"sliderDotsClass",
    dotClass: "sliderDotClass",
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:false
});

var owl = $(".priority");
owl.owlCarousel({
    rtl:true,
    loop:true,
    margin:30,
    center:true,
    nav:true,
    items:1,
    itemClass: "priorityslide",
    loadedClass:"priorityLoadedClass",
    dragClass:"priorityDragClass",
    stageClass:"priorityStageClass",
    stageOuterClass:"priorityStageOuterClass",
    rtlClass:"priorityRTLClass",
    navContainerClass:"priorityNavClass",
    navClass:[ 'priority-prev', 'priority-next' ],
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    dotsClass:"priorityDotsClass",
    dotClass: "priorityDotClass",
    autoplay:true,
    autoplayTimeout:7000,
    autoplayHoverPause:false
});

$('.dropdown').on('show.bs.dropdown', function(e){
  $(this).find('.dropdown-menu').first().stop(true, true).slideDown("slow");
});

$('.dropdown').on('hide.bs.dropdown', function(e){
  $(this).find('.dropdown-menu').first().stop(true, true).slideUp(200);
});

$(document).ready(function() {
    var $icon = $('button.main-menu');
        $icon.on('click',function(e){
        $('button.main-menu span').toggleClass('exit');
        });
        /* при изменении размера окна убирается класс exit у button*/
   /* $(window).resize(function() {     
        if (  $(window).width() > 768 ) {           
            $('button.main-menu span').removeClass('exit');
         }
    });*/
});
$(document).ready(function() {
    var $icon = $('button.dop-menu');
        $icon.on('click',function(e){
        $('button.dop-menu span').toggleClass('exit');
        });
        /* при изменении размера окна убирается класс exit у button*/
    /*$(window).resize(function() {     
        if (  $(window).width() > 768 ) {           
            $('button.dop-menu span').removeClass('exit');
         }
    });*/
});

/*




$(document).ready(function() {
    var $icon = $('button.navbar-toggle');
        $icon.on('click',function(e){
        $('span').toggleClass('exit');
        });
    $(window).resize(function() {     
        if (  $(window).width() > 768 ) {           
            $('span').removeClass('exit');
         }
    });
});


$(document).ready(function() {
    var $icon = $('a.toggle');
        $icon.on('click',function(e){
        $('span').toggleClass('exit');
        $('nav.main-menu > ul').slideToggle(600);
        });
    $(window).resize(function() {     
        if (  $(window).width() > 992 ) {           
            $('nav.main-menu ul').removeAttr('style');
            $('span').removeClass('exit');
         }
    });
    $("nav.main-menu ul li a").each(function() {
        if ($(this).next().length > 0) {
            $(this).addClass("parent"); 
        };
    });
    $('nav.main-menu ul li a.parent').on('click', function(){    
    $('nav.main-menu ul li ul').slideToggle(600);
});
});
*/