$(function(){
    var width = $(window).width();

    $('.js-close-icon, .js-burger-icon, .js-nav').click(function(){
        if (width < 1024) {
            $('.js-burger-icon, .js-close-icon, .js-nav').toggleClass('hide');
            $('body').toggleClass('open-menu');
        }
    });

    $('.js-read-more-btn').click(function(){
        $('.js-read-more-btn-text, .js-read-more-text').toggleClass('open');
    });

    $('.js-used-images-icon').click(function(){
        $('.js-used-images-content').toggleClass('open');
    });

    $('.js-close-images-icon, .js-used-images-content').click(function(){
        $('.js-used-images-content').removeClass('open');
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
                $('.status-success').slideToggle('open');
                
            }, function(error) {
                console.log('FAILED...', error);
                $('.status-error').slideToggle('open');
        });
        
        setTimeout(function(){
            $('.status-message').remove();
        }, 10000);
    });
}