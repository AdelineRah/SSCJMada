
$('.slides').slick({
    autoplay: true,
    speed: 250,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    dots:false,
    responsive: [
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1 ,
            },
          },
          {
            breakpoint: 768,
            settings: 'unslick',
          },
    ],
});