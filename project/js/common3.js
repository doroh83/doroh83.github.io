var owl = $(".top-slider");
owl.owlCarousel({
    loop: true,
    margin:50,
    center: true,
    items:1,
    itemClass: "top-slider-item",
    loadedClass:"sliderLoadedClass",
    dragClass:"sliderDragClass",
    stageClass:"sliderStageClass",
    stageOuterClass:"sliderStageOuterClass",
    nav: true,
    navContainerClass:"sliderNavClass",
    navClass:[ 'slider-prev', 'slider-next' ],
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    dotsClass:"sliderDotsClass",
    dotClass: "sliderDotClass",
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:false
});