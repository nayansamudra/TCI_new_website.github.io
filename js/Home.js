$(document).ready(function () {

  counter_1 = counter_2 = counter_3 = counter_course_accordion = 1
  index = ''
  $.ajaxSetup({ async: false }); // to stop async
  console.log("ready!");
  $(".navbar-toggler").on("click", function () {
    $(".navbar-collapse").toggle();
  });

  // $('.accordion-collapse').hide()

  $('.dropdown-toggle').on('click', function () {
    $('.dropdown-menu').toggle();
  })

  $('#heading_One').on('click', function () {
    $('#collapse_Two').removeClass('show in')
    $('#collapse_Three').removeClass('show in')
    $('#heading_Two button').addClass('collapsed')
    $('#heading_Three button').addClass('collapsed')
    $('#heading_Two button').attr('aria-expanded', 'false')
    $('#heading_Three button').attr('aria-expanded', 'false')
    $('#heading_One button').attr('aria-expanded', 'true')
    if ($('#collapse_One').hasClass('show')) {
      $('#collapse_One').removeClass('show')
      $('#heading_One button').attr('aria-expanded', 'false')
      $('#heading_One button').addClass('collapsed')
    }
    else {
      $('#collapse_One').addClass('show')
      $('#heading_One button').removeClass('collapsed')
    }
  })
  $('#heading_Two').on('click', function () {
    $('#collapse_One').removeClass('show in')
    $('#collapse_Three').removeClass('show in')
    $('#heading_One button').addClass('collapsed')
    $('#heading_Three button').addClass('collapsed')
    $('#heading_One button').attr('aria-expanded', 'false')
    $('#heading_Three button').attr('aria-expanded', 'false')
    $('#heading_Two button').attr('aria-expanded', 'true')
    if ($('#collapse_Two').hasClass('show')) {
      $('#collapse_Two').removeClass('show')
      $('#heading_Two button').attr('aria-expanded', 'false')
      $('#heading_Two button').addClass('collapsed')
    }
    else {
      $('#collapse_Two').addClass('show')
      $('#heading_Two button').removeClass('collapsed')
    }
  })
  $('#heading_Three').on('click', function () {
    $('#collapse_Two').removeClass('show in')
    $('#collapse_One').removeClass('show in')
    $('#heading_Two button').addClass('collapsed')
    $('#heading_One button').addClass('collapsed')
    $('#heading_Two button').attr('aria-expanded', 'false')
    $('#heading_One button').attr('aria-expanded', 'false')
    $('#heading_Three button').attr('aria-expanded', 'true')
    if ($('#collapse_Three').hasClass('show')) {
      $('#collapse_Three').removeClass('show')
      $('#heading_Three button').attr('aria-expanded', 'false')
      $('#heading_Three button').addClass('collapsed')
    }
    else {
      $('#collapse_Three').addClass('show')
      $('#heading_Three button').removeClass('collapsed')
    }
  })

  $('.course-accordion').on('click', function () {
    temp = $('.course-accordion').index(this)
    counter_course_accordion += 1
    console.log(temp)
    if (counter_course_accordion % 2 == 0 && counter_course_accordion <= 2) {
      $(this).addClass('active')
      $(this).next().css('max-height', 'fit-content')
    }
    else if (counter_course_accordion > 2) {
      if (temp == index) {
        if ($(this).hasClass('active')) {
          $('.course-accordion').removeClass('active')
          $('.course-panel').css('max-height', '0px')
        }
        else if (!$(this).hasClass('active')) {
          $(this).addClass('active')
          $(this).next().css('max-height', 'fit-content')
        }
      }
      else if (temp != index) {
        $('.course-accordion').removeClass('active')
        $('.course-panel').css('max-height', '0px')
        $(this).addClass('active')
        $(this).next().css('max-height', 'fit-content')
      }
    }
    index = temp
  })

  $(window).resize(function () {
    if ($(window).width() < 1200) {
      $("#Rocket_container")
        .removeClass("container")
        .addClass("container-fluid");
    }
    if ($(window).width() > 1200) {
      $("#Rocket_container")
        .removeClass("container-fluid")
        .addClass("container");
    }
    if ($(window).width() < 413) {
      $("#For_Mobile_View_image-item").removeClass("justify-content-center");
      $('body').css('overflow-x', 'clip')
    }
    if ($(window).width() > 413) {
      $("#For_Mobile_View_image-item").addClass("justify-content-center");
      $('body').css('overflow-x', 'clip')
    }
  });

  if ($(window).width() < 1200) {
    $("#Rocket_container").removeClass("container").addClass("container-fluid");
  }
  if ($(window).width() > 1200) {
    $("#Rocket_container").removeClass("container-fluid").addClass("container");
  }
  if ($(window).width() < 413) {
    $("#For_Mobile_View_image-item").removeClass("justify-content-center");
    $('body').css('overflow-x', 'clip')
  }
  if ($(window).width() > 413) {
    $("#For_Mobile_View_image-item").addClass("justify-content-center");
    $('body').css('overflow-x', 'clip')
  }
});
