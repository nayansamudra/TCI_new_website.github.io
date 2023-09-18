$(document).ready(function() {
    console.log( "ready!" );
    $('.navbar-toggler').on('click',function(){
        $('.navbar-collapse').toggle();
    })
    $('.dropdown-toggle').on('click',function(){
        $('.dropdown-menu').toggle();
    }) 
});