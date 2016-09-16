$(window).scroll(function() {
    if ($(this).scrollTop() > $(window).innerHeight()) {
        $('#page-menu').removeClass().addClass('showed');
    }
    else {
        $('#page-menu').removeClass().addClass('unshowed');
    }
});
