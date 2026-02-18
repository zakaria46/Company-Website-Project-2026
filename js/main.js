$(document).ready(function() {
    // $('#inner-caption').hide();
    $('#inner-caption').fadeIn(700).animate({
    marginTop: "-18px" // This moves it 50 pixels UP from its current spot
    }, "slow");
    $('#about-us').fadeIn(700).animate({
    marginTop: "-25px" // This moves it 50 pixels UP from its current spot
    }, "slow");
    
    // $('#sectors').fadeIn()
});

$(window).on('scroll', function() {
    // jQuery's $(window).scrollTop() is the equivalent of window.pageYOffset
    const scrollTop = $(window).scrollTop();
    
    // Logic for zoom calculation (100% check)
    const zoomLevel = Math.round((window.outerWidth / window.innerWidth) * 100);

    // if (scrollTop === 705.5999755859375 && zoomLevel === 100) {
    //     $('#sectors').fadeIn(700).animate({
    //          marginTop: "-25px" // This moves it 50 pixels UP from its current spot
    //     }, "slow");
    // }

    // console.log(scrollTop);
    // console.log(winHeight);
});

// Math.round((window.outerWidth / window.innerWidth) * 100)