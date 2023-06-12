$(function () {
    //스크롤 헤더 스타일변화
    let hd = $('header');
    let menu = $('nav li');
    let about = $('.about');
    let logo = $('header > .inner > h1');
    console.log(about.offset().top)
    let aboutTop = about.offset().top
    $(window).scroll(function () {
        let scrollBar = $(window).scrollTop();
        if (aboutTop < scrollBar) {
            menu.addClass('on');
            hd.addClass('on');
            logo.addClass('on');
        } else {
            menu.removeClass('on');
            hd.removeClass('on');
            logo.removeClass('on');
        }

        //contect 스크롤효과
        let contect = $('.contect');
        let text = $('.contect .text');
        let contectImg = $('.contect figure');
        let contectTop = contect.offset().top
        if (contectTop - 50 <= scrollBar) {
            text.addClass('on');
            contectImg.addClass('on');
        } else {
            text.removeClass('on');
            contectImg.removeClass('on')
        }
    });
    //header 메뉴바
    let bar = $('.bar')
    let tabMenuWidth = menu.outerWidth();
    bar.css({
        'width': tabMenuWidth
    })
    menu.mouseenter(function () {
        console.log($(this).position().left)
        let moveLeft = $(this).position().left;
        let thisWidth = $(this).outerWidth();
        bar.stop().animate({
            'left': moveLeft,
        })
        bar.css({
            'width': thisWidth
        })

        
    });
    // Swiper slide
    var swiper = new Swiper(".mySwiper01", {
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        //슬라이드01 버튼
        navigation: {
            nextEl: ".slide01-btn-next",
            prevEl: ".slide01-btn-prev",
        },
    });
    var swiper = new Swiper(".mySwiper02", {
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        //슬라이드02 버튼
        navigation: {
            nextEl: ".slide02-btn-next",
            prevEl: ".slide02-btn-prev",
        },
    });
    var swiper = new Swiper(".mySwiper03", {
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        //슬라이드03 버튼
        navigation: {
            nextEl: ".slide03-btn-next",
            prevEl: ".slide03-btn-prev",
        },
    });
    //design 아이템변경
    let designImg = $('.fixed > figure > img');
    let item = $('.right > .item');
    item.mouseenter(function () {
        console.log($(this).index())
        let imgIndex = $(this).index() + 1;
        designImg.attr('src', 'img/design0' + imgIndex + '.png');
    });
    //팝업창
    let popupBtn = $('.popup > button');
    let popupBg = $('.popup_bg');
    popupBtn.click(function(){
        $('.popup').css({
            'display' : 'none',
        })
        popupBg.css({
            'display' : 'none'
        })
    });
})// end