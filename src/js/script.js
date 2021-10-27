$(function () {
    $('#js-buttonHamburger').click(function () {
        $('body').toggleClass('is-drawer-active');

        if ($(this).attr('aria-expanded') == 'false') {
            $(this).attr('aria-expanded', true);
        } else {
            $(this).attr('aria-expanded', false);
        }
    });
});