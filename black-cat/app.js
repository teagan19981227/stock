let prevScroll = window.pageYOffset;
let menuList = document.querySelector('.menu__list')
let menuBtn = document.querySelector('#header nav .menu__btn')
let menuListSide = document.querySelector('.menu__list-side')
let html = document.querySelector('html')
let main = document.querySelector('#main')
let sliderWrap = document.querySelector('.slider__wrap')
let text = document.querySelector('#header>ul')
let footer = document.querySelector('#footer')
let menuOpen = false
window.onscroll = function() {
    let currentScroll = window.pageYOffset
    console.log(currentScroll)
    if (currentScroll > '37.5') {
        menuList.style.top = '-5.834vw'
        menuBtn.style.top = '3.125vw'
    } else {
        if (menuOpen) {
            menuList.style.top = '0'
            menuBtn.style.top = 'calc(-3.125vw - 64.5px)'
            menuListSide.style.right = "-100%";
            main.style.opacity = 1;
            sliderWrap.style.opacity = 1;
            text.style.opacity = 1;
            footer.style.opacity = 1;
            menuBtn.classList.add('menu__btn--open');

            menuOpen = false
        } else {
            menuList.style.top = '0'
            menuBtn.style.top = 'calc(-3.125vw - 64.5px)'
            menuBtn.classList.remove('menu__btn--open');
        }

    }
    prevScroll = currentScroll
}


//4.215vw

let banner = document.querySelector('.bubbles-banner')
let imageSources = ["./images/banner-2.jpeg", "./images/banner-3.jpeg", "images/banner-1.png"]
let index = 0;
setInterval(function() {
    if (index === imageSources.length) {
        index = 0;
    }
    banner.style.background = `url("${imageSources[index]}")`;
    banner.style.backgroundSize = `cover`;
    banner.animate([{ opacity: 0.2 }, { opacity: 0.5, offset: 0.2 }, { opacity: 1, offset: 0.4 }, { opacity: 1, offset: 0.8 }, { opacity: 0.5 }], {
        duration: 6000,
        iterations: Infinity
    })
    index++;
}, 6000);





menuBtn.addEventListener('click', function() {
    if (!menuOpen) {
        menuListSide.style.right = 0;
        main.style.opacity = 0.3;
        sliderWrap.style.opacity = 0.3;
        text.style.opacity = 0.3;
        footer.style.opacity = 0.3;
        menuBtn.classList.add('menu__btn--open');
        menuOpen = true
    } else {
        console.log(123)
        menuListSide.style.right = "-100%";
        main.style.opacity = 1;
        sliderWrap.style.opacity = 1;
        text.style.opacity = 1;
        footer.style.opacity = 1;
        menuBtn.classList.remove('menu__btn--open');
        menuOpen = false
    }
})


window.addEventListener("resize", function() {
    if (document.body.clientWidth < 500) {
        console.log("Screen width is at least 500px")
    } else {
        console.log("Screen less than 500px")
    }
})