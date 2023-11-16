$(function(){
    var width = $(window).width();
    
    if (width >= 1024) {
        $('.js-card').hover(function(){
            $('.js-card-content, .js-card-banner', this).slideToggle('open');
        });
    }
    
    if (width < 1024) {
        $('.js-card').click(function(){
            $('.js-card-content', this).slideToggle('open');
        });
    }

    $('.js-close-icon, .js-burger-icon, .js-nav').click(function(){
        if (width < 1024) {
            $('.js-burger-icon, .js-close-icon, .js-nav').toggleClass('hide');
            $('body').toggleClass('open-menu');
        }
    });

    $('.js-read-more-btn').click(function(){
        $('.js-read-more-btn-text, .js-read-more-text').toggleClass('open');
    });
});