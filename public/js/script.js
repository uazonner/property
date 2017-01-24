/* Selectors */

var navigation = ".primary-menu";
var toogleMenu = "#toggle-menu";
var tracker = "nav .tracker";
var slickNav = ".slicknav_menu";
var menu = "#menu";

function init() {

    /* < 991 PX Responsive */
    if (isMobile()) {
        setMenuAttr();
    } else {
        resetMenuAttr();
    }

    /* < 320 PX Responsive */
    if (isMobile(true)) {

    } else {

    }
}

function hideTracker() {
    $( tracker ).hide();
/*    $( toogleMenu ).css({
        "text-align": "center",
        "float": "none"
    });*/
}

function showTracker() {
    $( tracker ).show();
/*    $( toogleMenu ).css({
        "text-align": "center",
        "float": "right"
    });*/
}

function isMobile(isMin) {
    if (isMin === true) {
        return $( window ).width() <= 320;
    } else {
        return $( window ).width() <= 991;
    }
}

function setMenuAttr() {
    /*$( navigation ).hide();*/
    $( slickNav ).show();
}

function resetMenuAttr() {
    $( slickNav ).hide();
 /*   $( navigation ).show();*/
}

$( document ).ready(function() {
    console.log( "Page ready!" );

    $( window ).resize(function() {
        init();
    });

    init();

    $( menu ).slicknav({
        label: '',
        prependTo: '.primary-menu',
        duration: 500,
        duplicate: true
    });

    /* < 991 PX Responsive */
    if (isMobile()) {
        $( slickNav ).show();
    }

    if (!isMobile()) {

    }

    // Sumoselect

    $('#ads-type').SumoSelect({
        placeholder: 'Тип объявления',
        csvDispCount: 3
    });

    $('#realty-type').SumoSelect({
        placeholder: 'Тип недвижимости',
        csvDispCount: 3
    });



    $('#rooms-quantity').SumoSelect({
        placeholder: 'Количество комнат',
        csvDispCount: 3
    });

/*    /!* Multiselect on forms *!/

    $( '#rooms-count' ).multiselect({
        enableClickableOptGroups: false
    });*/
    /* Timer on tracker */

    (function () {
        function checkTime(i) {
            return (i < 10) ? "0" + i : i;
        }

        function startTime() {
            var today = new Date(),
                h = checkTime(today.getHours()),
                m = checkTime(today.getMinutes()),
                s = checkTime(today.getSeconds());
            document.getElementById('time').innerHTML = h + ":" + m;
            /*document.getElementById('time').innerHTML = h + ":" + m + ":" + s;*/
            t = setTimeout(function () {
                startTime()
            }, 500);
        }
        startTime();
    })();

});












