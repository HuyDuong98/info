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
        console.log("experience",experience);
        $(".nav-item").removeClass("active");
        $("li[data-nav='experience']").addClass("active");
    }
    else if (scroll > about) {
        console.log("about",about);
        $(".nav-item").removeClass("active");
        $("li[data-nav='about']").addClass("active");
    }
    else if (scroll > 0) {
        console.log("about",about);
        $(".nav-item").removeClass("active");
        $("li[data-nav='home']").addClass("active");
    }
     
});