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

(function() {
    emailjs.init('xrZMsaaPoq5UDCocy');
})();

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        this.contact_number.value = Math.random() * 100000 | 0;
        emailjs.sendForm('service_8agma79', 'template_zsen166', '#contact-form')
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}