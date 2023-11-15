$(function(){
    var width = $(window).width();
    
    $('.js-card').hover(function(){
        $('.js-card-content', this).slideToggle('open');
    });

    $('.js-close-icon, .js-burger-icon, .js-nav').click(function(){
        if (width < 1024) {
            $('.js-burger-icon, .js-close-icon, .js-nav').toggleClass('hide');
            $('body').toggleClass('open-menu');
        }
    });
});