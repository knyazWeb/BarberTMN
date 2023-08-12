$(document).ready(function() {
    $(".header__menu-phone").click(function() {
        $(".header__nav").toggleClass("none");
        $(".header__panel").toggleClass("none");

        $(this).toggleClass("active");
        $(".header").toggleClass("active");
        $(".header__nav").toggleClass("active");
        $("body").toggleClass("lock");
        $(".header__panel-btn").toggleClass("active");



    })
});
