$(document).ready(function() {
    $('#accordeon .accordeon-head').on('click', accordeon);
});

function accordeon(){
    $('#accordeon .accordeon-body').not($(this).next()).slideUp(1000);
    $(this).next().slideToggle(2000);
}