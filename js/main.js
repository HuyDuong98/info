
function toDataURL(src, callback, outputFormat) {
    var img = new Image();
    img.crossOrigin = 'Anonymous';
    img.onload = function () {
        var canvas = document.createElement('CANVAS');
        var ctx = canvas.getContext('2d');
        var dataURL;
        canvas.height = this.naturalHeight;
        canvas.width = this.naturalWidth;
        ctx.drawImage(this, 0, 0);
        dataURL = canvas.toDataURL(outputFormat);
        callback(dataURL);
    };
    img.src = src;
    if (img.complete || img.complete === undefined) {
        img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
        img.src = src;
    }
}

function changeImageBase64(item) {
    var url = $(item).attr("data-src");
    var tagname = $(item).prop("tagName");
    toDataURL(url,
        function (dataUrl) {
            if (tagname == "IMG") {
                $(item).attr("src", dataUrl);
            }else{
                $(item).css("background-image", "url("+dataUrl+")");
            }
            $(item).attr("data-src", "");
        }
    )
}

AOS.init();
$(".lazy").Lazy({
    threshold: 0
});
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

    $(".lazy-js").each(function () {
        changeImageBase64(this);
    });
    setTimeout(function () {
        $('.loader-content').fadeOut(2000);
    }, 3000);
    setTimeout(function () {
        $('.loader-overlay').fadeOut(1000);
    }, 5000);
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