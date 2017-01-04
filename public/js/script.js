$(window).on('resize',function() {
    if ($(window).width() < 1000) {
        $('#headerfull').hide();
        $('#navigationfull .primary').hide();
        $('#navigationfull .primary').addClass('responsive');
        $('#navigationfull .primary').removeClass('primary');
    } else {
        $('#headerfull').show();
    }


});

$(document).ready(function() {
    $(window).trigger('resize');

    $("#menu-toggle").on( "click", function() {
        $('#navigationfull .responsive').show();
    });
});

