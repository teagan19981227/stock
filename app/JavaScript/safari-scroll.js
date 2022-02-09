function loadJsScroll() {
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        $('.container').css('scroll-snap-type', 'initial')
        $('section').css('height', 'auto')
        let position = $($.attr(this, 'href')).offset().top + $('.container').scrollTop()

        $('.container').animate({
            scrollTop: position
        }, 500, 'linear')
        $('.container').css('scroll-snap-type', 'y mandatory')
        $('section').css('height', 'calc(100vh + 77.8px)')
    });
}

function detectBrowser() {
    if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1) {
        //
    } else if (navigator.userAgent.indexOf("Edg") != -1) {
        //
    } else if (navigator.userAgent.indexOf("Chrome") != -1) {
        //
    } else if (navigator.userAgent.indexOf("Safari") != -1) {
        loadJsScroll();
    } else if (navigator.userAgent.indexOf("Firefox") != -1) {
        //
    } else if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) //IF IE > 10
    {
        //
    } else {
        //
    }
}


detectBrowser();