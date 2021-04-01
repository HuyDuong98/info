AOS.init();
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    var about = $("#about").offset().top - 200;
    var experience = $("#experience").offset().top - 200;
    var product = $("#product").offset().top - 200;
    if (scroll > product) {
        $(".nav-item").removeClass("active");
        $("li[data-nav='product']").addClass("active");
    }
    else if (scroll > experience) {
        $(".nav-item").removeClass("active");
        $("li[data-nav='experience']").addClass("active");
    }
    else if (scroll > about) {
        $(".nav-item").removeClass("active");
        $("li[data-nav='about']").addClass("active");
    }
    else if (scroll > 0) {
        $(".nav-item").removeClass("active");
        $("li[data-nav='home']").addClass("active");
    }
});

$(document).ready(function () {
    var about = $("#about").offset().top - 200;
    var experience = $("#experience").offset().top - 200;
    var product = $("#product").offset().top - 200;
    $("li[data-nav='product']").click(function () {
        document.documentElement.scrollTop = $("#product").offset().top - 200;
    });
    $("li[data-nav='experience']").click(function () {
        document.documentElement.scrollTop = $("#experience").offset().top - 200;
    });
    $("li[data-nav='about']").click(function () {
        document.documentElement.scrollTop = $("#about").offset().top - 200;
    });
    $("li[data-nav='home']").click(function () {
        document.documentElement.scrollTop = 0;
    });
});