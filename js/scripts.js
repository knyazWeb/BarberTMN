$(document).ready(function () {

    

    const clearFields = () => {
        $("#popup__input-name").val("");
        $("#popup__input-phone").val("");
    };

    const toggleMenu = () => {
        $(".header__nav").toggleClass("none");
        $(".header__panel").toggleClass("none");

        $(".header__menu-phone").toggleClass("active");
        $(".header").toggleClass("active");
        $("body").toggleClass("lock");
    };

    if ('ontouchstart' in document.documentElement) {
        // If it does, remove the :hover CSS style on touchstart
        $(document).on('touchstart', function(){
          $('*').removeClass('hover');
        });
        
        // Add the :hover CSS style on mouseenter
        $('*').on('mouseenter', function(){
          $(this).addClass('hover');
        });
        
        // Remove the :hover CSS style on mouseleave
        $('*').on('mouseleave', function(){
          $(this).removeClass('hover');
        });
    }

    // Hedear scripts
    $(".header__menu-phone").click(function () {
        toggleMenu();
        
    });

    $(".nav__item").click(function () {
        if ($(".header__menu-phone").hasClass("active")) {
            toggleMenu();
        }
    });

    // Popup scripts

    $(".header__panel-btn").click(function () {
        $(".popup-fade").fadeIn("fast");
        $("body").addClass("lock");
        
        return false;
    });
    $(".popup-close").click(function () {
        $(this).parents(".popup-fade").fadeOut("fast");
        
        toggleMenu();
        clearFields();
        return false;
    });
    if ($(".popup-fade").css("display") == "block") {
    }
    $(document).keydown(function (e) {
        if (e.keyCode === 27) {
            if ($(".popup-fade").css("display") == "block") {
                e.stopPropagation();
                $(".popup-fade").fadeOut("fast");

                toggleMenu();
                clearFields();
            }
        }
    });

    $(".popup-fade").click(function (e) {
        if ($(e.target).closest(".popup").length == 0) {
            $(this).fadeOut("fast");
            toggleMenu();
            clearFields();
        }
    });

    $(".popup__btn").click((e) => {
        e.preventDefault();
        // if fields not empty
        if (
            $("#popup__input-name").val().length > 1 &&
            $("#popup__input-phone").val().length > 5
        ) {
            $(".popup__btn").toggleClass("active__btn");

            setTimeout(() => {
                $(".popup-fade").fadeOut("fast");

                // Close mobile menu
                if ($(".header__menu-phone").hasClass("active")) {
                    toggleMenu();
                } else {
                    $("body").removeClass("lock");
                }
            }, 1300);
            setTimeout(() => {
                // reload static popup btn
                $(".popup__btn").toggleClass("active__btn");

                clearFields();
            }, 1500);
            // Check empty fields
        } else {
            // disabled button for a while
            $(".popup__btn").prop("disabled", true);

            // enabled button
            setTimeout(() => {
                $(".popup__btn").prop("disabled", false);
            }, 2000);

            if (
                $("#popup__input-name").val().length <= 1 &&
                $("#popup__input-phone").val().length <= 5
            ) {
                $(".popup__input").addClass("popup-error");

                setTimeout(() => {
                    $(".popup__input").removeClass("popup-error");
                }, 1000);
            } else if ($("#popup__input-phone").val().length <= 5) {
                $("#popup__input-phone").addClass("popup-error");

                setTimeout(() => {
                    $("#popup__input-phone").removeClass("popup-error");
                }, 1000);
            } else {
                $("#popup__input-name").addClass("popup-error");

                setTimeout(() => {
                    $("#popup__input-name").removeClass("popup-error");
                }, 1000);
            }
        }
    });

    // View/hide all photos in gallery
    $(".gallery__btn").click(() => {
        if ($(".gallery__items--all").hasClass("gallery__items--hidden")) {
            $(".gallery__btn span").text("Hide All");
            $(".gallery__items--all").removeClass("gallery__items--hidden");
            setTimeout(() => {
                $(".gallery__items--all").removeClass(
                    "gallery__items--visuallyhidden"
                );
            }, 20);
        } else {
            $(".gallery__items--all").addClass(
                "gallery__items--visuallyhidden"
            );
            setTimeout(() => {
                $(".gallery__items--all").addClass("gallery__items--hidden");
                $(".gallery__btn span").text("View All");
            }, 800);
        }
    });
});

/* Phone Mask */
mask("#popup__input-phone");
const phoneInput = document.querySelector("#popup__input-phone");

function clearPhoneInput(input) {
    input.addEventListener("input", () => {
        if (input.value == "+") input.value = "";
    });
    input.addEventListener("blur", () => {
        if (input.value == "+") input.value = "";
    });
}
clearPhoneInput(phoneInput);
