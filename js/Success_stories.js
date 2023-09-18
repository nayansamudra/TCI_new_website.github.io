$(document).ready(function () {
    console.log("ready!");
    $('.navbar-toggler').on('click', function () {
        $('.navbar-collapse').toggle();
    })
    $('.dropdown-toggle').on('click', function () {
        $('.dropdown-menu').toggle();
    })
    $('#video_1').on('click', function () {
        var value = $('#video_button_1').attr("data-lightbox-content");
        console.log(value)
        // $('iframe').attr('src', value)
        $('.lightbox-column').append(`<div class="lightbox-video">
                <iframe src="${value}" frameborder="0" allowfullscreen="" allow="autoplay"> </iframe>
            </div>`)
        $('.lightbox').show()
    })
    $('#video_2').on('click', function () {
        var value = $('#video_button_2').attr("data-lightbox-content");
        console.log(value)
        // $('iframe').attr('src', value)
        $('.lightbox-column').append(`<div class="lightbox-video">
                <iframe src="${value}" frameborder="0" allowfullscreen="" allow="autoplay"> </iframe>
            </div>`)
        $('.lightbox').show()
    })
    $('.lightbox-close').on('click', function () {
        $('.lightbox-column').empty()
        $('.lightbox').hide()
    })
});