$(function () {
    const mediaQueryList = window.matchMedia("(min-width:767px)");
    const headerNav = document.querySelector('.js-header-nav');

    /**
     * イベントリスナー
     */
    const listener = (event) => {
        if (event.matches) {
            headerNav.removeAttribute('aria-hidden');
        } else {
            headerNav.setAttribute('aria-hidden', true);
        }
    };
    
    // リスナー登録
    mediaQueryList.addEventListener("change", listener);
    
    // 初期化処理
    listener(mediaQueryList);

    $('#js-buttonHamburger').click(function () {
        $('body').toggleClass('is-drawer-active');

        if ($(this).attr('aria-expanded') == 'false') {
            $(this).attr('aria-expanded', true);
            $('.js-header-nav').attr('aria-hidden', false);
        } else {
            $(this).attr('aria-expanded', false);
            $('.js-header-nav').attr('aria-hidden', true);
        }
    });

    let startPos = 0;
    let winScrollTop = 0;
    $(window).on('scroll',function(){
        winScrollTop = $(this).scrollTop();
        if (winScrollTop >= startPos) {
            $('.js-header').addClass('is-hide');
        } else {
            $('.js-header').removeClass('is-hide');
        }
        startPos = winScrollTop;
    });

});
