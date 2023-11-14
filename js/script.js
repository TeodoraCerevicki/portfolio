$(function(){
    $('.js-card').hover(function(){
        $('.js-card-content', this).slideToggle('open');
    });
});