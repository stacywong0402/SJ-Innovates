$(document).ready(function animateHeart() {
    $('span#heart').animate({
        fontSize: $('span#heart').css('fontSize') == '300px' ? '290px' : '300px'
    }, 500, animateHeart);
});

jQuery(document).ready(function() {
    jQuery('.iconWithText').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 100
    });
});

jQuery(document).ready(function() {
    jQuery('#otherIcons').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 100
    });
});


jQuery(document).ready(function() {
    jQuery('.inclusiveText').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInLeft',
        offset: 100
    });
});

jQuery(document).ready(function() {
    jQuery('.friendlyText').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInDown',
        offset: 100
    });
});

jQuery(document).ready(function() {
    jQuery('.person').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInDown',
        offset: 100
    });
});

jQuery(document).ready(function() {
    jQuery('.smileyface').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated bounceIn',
        offset: 100
    });
});


jQuery(document).ready(function() {
    jQuery('.sustainableText').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated flipInX',
        offset: 100
    });
});

jQuery(document).ready(function() {
    jQuery('#sustainableHeader').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated flipInX',
        offset: 100
    });
});

jQuery(document).ready(function() {
    jQuery('#sustainableHeader2').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated flipInX',
        offset: 100
    });
});

jQuery(document).ready(function() {
    jQuery('.demonstrationText').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated slideInRight',
        offset: 100
    });
});

jQuery(document).ready(function() {
    jQuery('#demonstrationHeader').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated slideInRight',
        offset: 100
    });
});

jQuery(document).ready(function() {
    jQuery('#demonstrationHeader2').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated slideInRight',
        offset: 100
    });
});