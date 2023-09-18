function GoBack() {
    $('#Graphic_Designer').hide();
    $('#SEO_Analyst').hide();
    $('#Financial_Content_Writer').hide();
    $('#Full_Stack_Web_Devloper').hide();
    $('#Career_Page').show();
}

$(document).ready(function () {
    console.log("ready!");
    $('.accordion-collapse').hide()
    $('.navbar-toggler').on('click', function () {
        $('.navbar-collapse').toggle();
    })
    $('.dropdown-toggle').on('click', function () {
        $('.dropdown-menu').toggle();
    })
    $('#GD_More').on('click', function () {
        $(window).scrollTop(0);
        $('#Graphic_Designer').show();
        $('#SEO_Analyst').hide();
        $('#Financial_Content_Writer').hide();
        $('#Full_Stack_Web_Devloper').hide();
        $('#Career_Page').hide();
    })
    $('#SEO_More').on('click', function () {
        $(window).scrollTop(0);
        $('#Graphic_Designer').hide();
        $('#SEO_Analyst').show();
        $('#Financial_Content_Writer').hide();
        $('#Full_Stack_Web_Devloper').hide();
        $('#Career_Page').hide();
    })
    $('#Content_writer_More').on('click', function () {
        $(window).scrollTop(0);
        $('#Graphic_Designer').hide();
        $('#SEO_Analyst').hide();
        $('#Financial_Content_Writer').show();
        $('#Full_Stack_Web_Devloper').hide();
        $('#Career_Page').hide();
    })
    $('#Full_stack_web_devloper_More').on('click', function () {
        $(window).scrollTop(0);
        $('#Graphic_Designer').hide();
        $('#SEO_Analyst').hide();
        $('#Financial_Content_Writer').hide();
        $('#Full_Stack_Web_Devloper').show();
        $('#Career_Page').hide();
    })
});
