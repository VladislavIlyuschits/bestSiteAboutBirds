$( document ).ready(function() {
    $('.').on('click', function(e) {
        $('.side-nav').toggleClass("open");
        e.preventDefault();
    });
});