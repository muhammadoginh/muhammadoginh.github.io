$('.page-scroll').on('click', function(e) {

    // ambil isi href
    var section = $(this).attr('href');
    
    // tangkap elemen
    var sectionElement = $(section);

    // pindahkan scroll
    $('html').animate({
        scrollTop: sectionElement.offset().top - 50
    }, 1000, 'swing');

    console.log(sectionElement.offset().top);

    e.preventDefault();

});

// parallax
// butuh sebuah event yang menangani scroll pada halaman
$(window).scroll(function() {

    // navigation bar
    var $nav = $(".fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());


    // jumbotron
    var wscroll = $(this).scrollTop();

    $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ wscroll +'%)'
    });

    $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+ wscroll/16 +'%)'
    });

    $('.jumbotron p').css({
        'transform' : 'translate(0px, '+ wscroll/16 +'%)'
    });

    
    // portfolio
    if (wscroll > $('.portfolio').offset().top - 300) {
        $('.portfolio .img-thumbnail').each(function(i) {
            setTimeout(function() {
                $('.portfolio .img-thumbnail').eq(i).addClass('muncul');
            }, 400 * (i+1));
        });        
    }     
});

    
// about
$(window).on('load', function() {
    $('.pkiri').addClass('pmuncul')
    $('.pkanan').addClass('pmuncul')
})