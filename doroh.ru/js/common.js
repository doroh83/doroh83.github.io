
/*             кнопка  меню               */
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

/*              начало анимации элементов               */
$(window).load(function() {
  $('.menu-line .logo-wrap, .main-menu, section.dark h3:first-child, section.light h3:first-child').animated("zoomIn", "fadeOut");
  $('.big-nav li').animated("flipInY", "fadeOut");
})
/*              конец анимации элементов               */

/*                     кнопка вниз                      */

$(document).ready(function(){
$('.next-btn').click(function() {
    jQuery.scrollTo('#work-sect', 900, {margin:true} );
    });
})

/*                   кнопка вверх                       */
$("body").append('<div class="top"><i class="fa fa-angle-double-up"></i>');
$("body").on("click", ".top", function(){
    $("html, body").animate({scrollTop:0}, "slow");
});
$(window).scroll(function(){
    if($(this).scrollTop() > $(this).height()) {
        $(".top").addClass("onset");
    } else {
        $(".top").removeClass("onset");
    }
})