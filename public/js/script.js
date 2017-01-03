$( window ).resize(function() {
    if ($(window).width() < 1000) {
        $('#headerfull').hide();
    }
});