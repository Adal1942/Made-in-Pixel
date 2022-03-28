$('.sajid-1').owlCarousel({
    loop:true,
    margin:5,
    nav:false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3500,
    responsive:{
        0:{
            items:1
        },
        700:{
            items:1
        },
        1000:{
            items:2
        }
    }
});
$('.sajid-2').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay: true,
    autoplayTimeout: 4000,
    responsive:{
        0:{
            items:4
        },
        700:{
            items:4
        },
        1000:{
            items:10
        }
    }
});