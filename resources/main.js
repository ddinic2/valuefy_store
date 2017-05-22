$(document).ready(function(){
    $('ul.tabs').tabs({
        onShow: function() {
            var link = $(this).attr('href');
            setTimeout(function(){
                window.location.href = link;
            }, 300)
        }
    });
});

$(document).ready(function(){
    $('.carousel').carousel();
});

// Next slide
$('.carousel').carousel('next');
$('.carousel').carousel('next', 3); // Move next n times.
// Previous slide
$('.carousel').carousel('prev');
$('.carousel').carousel('prev', 4); // Move prev n times.
// Set to nth slide
$('.carousel').carousel('set', 4);

$('.carousel.carousel-slider').carousel({fullWidth: true});

$(document).ready(function(){
    $('.materialboxed').materialbox();
});

$(document).ready(function() {
    $('select').material_select();
});

$(document).ready(function() {
    $('input#input_text, textarea#textarea1').characterCounter();
});


