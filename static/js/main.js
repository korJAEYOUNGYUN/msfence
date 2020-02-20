$('a[class="nav-item nav-link"]')
    .not('[carousel-control-prev]')
    .click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
}, 500);
    return false;
});