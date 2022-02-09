//aos
AOS.init();


//home page circle text animation

const paths = document.querySelectorAll('#quote path');
const quote = document.querySelector('#quote');

function stroke() {
    for (let i = 0; i < paths.length; i++) {
        let length = paths[i].getTotalLength()
        paths[i].style.strokeDasharray = length
        paths[i].style.strokeDashoffset = length
        paths[i].animate([{ strokeDashoffset: length }, { strokeDashoffset: '0' }], { fill: 'forwards', duration: 500, delay: `${i*50}` })
    };

    quote.animate([{ fill: '' }, { fill: `#FFA500` }], { fill: 'forwards', duration: 1000, delay: `${50*(paths.length - 1)}` })
}





//loading page

$(window).on('load', function() {
    stroke();
    $("#splash").delay(2300).fadeOut('slow');
})



//anchor with pages

let aboutAnchorPoint = document.querySelector('.about__title .title__text')
let experiencesAnchorPoint = document.querySelector('.experiences__title .title__text')
let abilitiesAnchorPoint = document.querySelector('.abilities__title .title__text')
let portfolioAnchorPoint = document.querySelector('.portfolio__title .title__text')
let contactAnchorPoint = document.querySelector('.contact__title .title__text')

let navItem = document.querySelectorAll('.nav__item a')

var styleElem = document.head.appendChild(document.createElement("style"));

let pageAbout = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            styleElem.innerHTML = "header.header .nav__item:nth-of-type(1)::after{transform: translate(-50%,-50%) scale(1)}";
            $('.about__title .title__text').addClass('o-trans')

            $('.about__content').addClass('o-trans')

        } else {}
    })
})


pageAbout.observe(aboutAnchorPoint)

let pageExperiences = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            styleElem.innerHTML = "header.header .nav__item:nth-of-type(2)::after {transform: translate(-50%,-50%) scale(1)} ";
            $('.experiences__title .title__text').addClass('o-trans')
            $('.experiences__body').addClass('o-trans')
        } else {}
    })
})
pageExperiences.observe(experiencesAnchorPoint)


let pageAbilities = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            styleElem.innerHTML = "header.header .nav__item:nth-of-type(3):after {transform: translate(-50%,-50%) scale(1)} ";
            $('.abilities__title .title__text').addClass('o-trans')
            $('.skills__content dl').addClass('o-trans')
            $('.skills__subtitle').addClass('o-trans')
            $('.language__body').addClass('o-trans')
            $('.education__body').addClass('o-trans')
        } else {}
    })
})


pageAbilities.observe(abilitiesAnchorPoint)

let pagePortfolio = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            styleElem.innerHTML = "header.header .nav__item:nth-of-type(4):after {transform: translate(-50%,-50%) scale(1)}";
            $('.portfolio__title .title__text').addClass('o-trans')
            $('.portfolio__item').addClass('o-trans')
        } else {}
    })
})
pagePortfolio.observe(portfolioAnchorPoint);

let pageContact = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            styleElem.innerHTML =
                "header.header .nav__item:nth-of-type(5):after {transform: translate(-50%,-50%) scale(1)}";
            $('.contact__title .title__text').addClass('o-trans')
            $('.contact__body').addClass('o-trans')
        } else {}
    })
})
pageContact.observe(contactAnchorPoint);



//menu
let navBtn = document.querySelector('.nav__button')
let isMenuOpen = false

navBtn.addEventListener('click', function() {
    if (!isMenuOpen) {
        $('.nav__items').css('top', '0')
        $('html').css('overflow-y', 'hidden')
        isMenuOpen = true
    } else {

        $('.nav__items').css('top', '-100vh')
        $('html').css('overflow-y', 'auto')
        isMenuOpen = false
    }

})

$('.nav__item').on('click', function() {
    $('html').css('overflow-y', 'auto')
    $('.nav__items').css('top', '-100vh')
    isMenuOpen = false
})