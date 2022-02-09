let menuOpen = false
$(document).ready(function() {
    $('.nav__button').click(function() {
        if (!menuOpen) {
            $('html').addClass('menu-is-open')
            $('.nav__button .far').addClass('fa-times')
            $('.nav__button .far').removeClass('fa-bars')
            menuOpen = true
        } else {
            $('html').removeClass('menu-is-open')
            $('.nav__button .far').removeClass('fa-times')
            $('.nav__button .far').addClass('fa-bars')
            menuOpen = false
        }
    })


    $('.nav__link a').click(function() {
        $('html').removeClass('menu-is-open')
        $('.nav__button .far').removeClass('fa-times')
        $('.nav__button .far').addClass('fa-bars')
        $('html, body').animate({ scrollTop: $($(this).attr("href")).offset().top }, 100);
        menuOpen = false
    })
})


document.addEventListener('DOMContentLoaded', function() {
    new Splide('#image-slider', {
        type: 'fade',
        rewind: true,
        cover: true,
        heightRatio: 0.5,
        autoplay: true,
        interval: 3000,
        easing: 'ease-in-out',
        pauseOnFocus: false,
    }).mount();
});



$(document).ready(function() {
    $('.feature__image').each(function(i) {
        $(this).css('background', `url('././image/feature-${i+1}.png')`)
        $(this).css('background-size', 'cover')
        $(this).css('background-position', 'center')
    })

    $('.share__photo').each(function(i) {
        $(this).css('background-image', `url('././image/photo-${i+1}.png')`)
        $(this).css('background-color', '#efefef')
        $(this).css('background-size', 'cover')
    })

    $(function() {
        AOS.init();
    });

    $(window).on('load', function() {
        AOS.refresh();
    });

    $('.inner-item').each(function() {
        $(this).attr('data-aos', 'fade-up')
        $(this).attr('data-aos-easing', 'ease-in-out')
        $(this).attr('data-aos-duration', 700)
        $(this).attr('data-aos-delay', 10)
    })

    $('.dept__inner-colleges').each(function() {
        $(this).attr('data-aos', 'fade-up')
        $(this).attr('data-aos-easing', 'ease-in-out')
        $(this).attr('data-aos-duration', 700)
        $(this).attr('data-aos-delay', 10)
    })

    $('.info__card').each(function() {
        $(this).attr('data-aos', 'fade-up')
        $(this).attr('data-aos-easing', 'ease-in-out')
        $(this).attr('data-aos-duration', 700)
        $(this).attr('data-aos-delay', 10)
    })

    $('.section__header').each(function() {
        $(this).attr('data-aos', 'fade-up')
        $(this).attr('data-aos-easing', 'ease-in-out')
        $(this).attr('data-aos-duration', 600)
        $(this).attr('data-aos-delay', 10)
    })

    $('.share__items').each(function() {
        $(this).attr('data-aos', 'fade-up')
        $(this).attr('data-aos-easing', 'ease-in-out')
        $(this).attr('data-aos-duration', 600)
        $(this).attr('data-aos-delay', 10)
    })



})