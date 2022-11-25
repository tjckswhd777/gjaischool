"use strict";
$(document).ready(function() {
    // card js start
    $(".card-header-right .close-card").on('click', function() {
        var $this = $(this);
        $this.parents('.card').animate({
            'opacity': '0',
            '-webkit-transform': 'scale3d(.3, .3, .3)',
            'transform': 'scale3d(.3, .3, .3)'
        });

        setTimeout(function() {
            $this.parents('.card').remove();
        }, 800);
    });
    $(".card-header-right .reload-card").on('click', function() {
        var $this = $(this);
        $this.parents('.card').addClass("card-load");
        $this.parents('.card').append('<div class="card-loader"><i class="fa fa-spinner rotate-refresh"></div>');
        setTimeout(function() {
            $this.parents('.card').children(".card-loader").remove();
            $this.parents('.card').removeClass("card-load");
        }, 3000);
    });
    $(".card-header-right .card-option .fa-chevron-left").on('click', function() {
        var $this = $(this);
        if ($this.hasClass('fa-chevron-right')) {
            $this.parents('.card-option').animate({
                'width': '35px',
            });
        } else {
            $this.parents('.card-option').animate({
                'width': '180px',
            });
        }
        $(this).toggleClass("fa-chevron-right").fadeIn('slow');
    });
    $(".card-header-right .minimize-card").on('click', function() {
        var $this = $(this);
        var port = $($this.parents('.card'));
        var card = $(port).children('.card-block').slideToggle();
        $(this).toggleClass("fa-minus").fadeIn('slow');
        $(this).toggleClass("fa-plus").fadeIn('slow');
    });
    $(".card-header-right .full-card").on('click', function() {
        var $this = $(this);
        var port = $($this.parents('.card'));
        port.toggleClass("full-card");
        $(this).toggleClass("fa-window-restore");
    });

    $(".card-header-right .icofont-spinner-alt-5").on('mouseenter mouseleave', function() {
        $(this).toggleClass("rotate-refresh").fadeIn('slow');
    });
    $("#more-details").on('click', function() {
        $(".more-details").slideToggle(500);
    });
    $(".mobile-options").on('click', function() {
        $(".navbar-container .nav-right").slideToggle('slow');
    });
    $(".search-btn").on('click', function() {
        $(".main-search").addClass('open');
        $('.form-control').animate({
            'width': '200px',
        });
    });
    $(".search-close").on('click', function() {
        $('.main-search .form-control').animate({
            'width': '0',
        });
        setTimeout(function() {
            $(".main-search").removeClass('open');
        }, 300);
    });
    $(".header-notification").on('click', function() {
        $(this).children('.show-notification').slideToggle(500);
        $(this).toggleClass('active');

    });
    // card js end
    $(".main-menu").mCustomScrollbar({
        setTop: "1px",
        setHeight: "calc(100% - 90px)",
    });
    /*chatbar js start*/
});
$(document).ready(function() {
    $(".theme-loader").animate({
        opacity: "0"
    },1000);
    setTimeout(function() {
        $(".theme-loader").remove();
    }, 800);
});

// toggle full screen
function toggleFullScreen() {
    var a = $(window).height() - 10;

    if (!document.fullscreenElement && // alternative standard method
        !document.mozFullScreenElement && !document.webkitFullscreenElement) { // current working methods
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        }
    } else {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
    }
}
var $window = $(window);
var nav = $('.fixed-button');
    $window.scroll(function(){
        if ($window.scrollTop() >= 200) {
         nav.addClass('active');
     }
     else {
         nav.removeClass('active');
     }
 });

function windowpopup1(data) {
    console.log(data)
    const width = 1280;
    const height = 1024;
    let left = (document.body.offsetWidth / 2) - (width / 2);
    let tops = (document.body.offsetHeight / 2) - (height / 2);
    left += window.screenLeft;
    const popup = window.open('z_undefined_openwindow.html', 'firelog_popup', `width=${width}, height=${height}, left=${left}, top=${tops}`);
    popup.location.href = 'http://192.168.80.86:8080/popup/popup1&fire_seq=';
}
function windowpopup2() {
    const width = 800;
    const height = 600;
    let left = (document.body.offsetWidth / 2) - (width / 2);
    let tops = (document.body.offsetHeight / 2) - (height / 2);
    left += window.screenLeft;
    const popup = window.open('z_undefined_linechart.html', 'firelog_popup', `width=${width}, height=${height}, left=${left}, top=${tops}`);
}
function windowpopup3() {
    const width = 800;
    const height = 600;
    let left = (document.body.offsetWidth / 2) - (width / 2);
    let tops = (document.body.offsetHeight / 2) - (height / 2);
    left += window.screenLeft;
    const popup = window.open('z_undefined_openwindow.html', 'firelog_popup', `width=${width}, height=${height}, left=${left}, top=${tops}`);
}
function windowpopup4() {
    const width = 800;
    const height = 600;
    let left = (document.body.offsetWidth / 2) - (width / 2);
    let tops = (document.body.offsetHeight / 2) - (height / 2);
    left += window.screenLeft;
    const popup = window.open('z_undefined_openwindow.html', 'firelog_popup', `width=${width}, height=${height}, left=${left}, top=${tops}`);
}
function getSensorData1() {
    //alert('눌려짐')
    $('#removedata1').empty();
    $('#removedata1').append('<h5 height="71">Total Sensor Graph1</h5>');
    $('#removedata2').empty();
    $('#removedata2').append('<canvas id="canvas" ></canvas>');
    // console.log(removedata)
    // $('removedata').empty();
    // $('removedata').append('삭제되고 추가됐음');
}
function getSensorData2() {
    //alert('눌려짐')
    $('#removedata1').empty();
    $('#removedata1').append('<h5>Total Sensor Graph2</h5>');
    $('#removedata2').empty();
    $('#removedata2').append('<canvas id="canvas" ></canvas>');
    // console.log(removedata)
    // $('removedata').empty();
    // $('removedata').append('삭제되고 추가됐음');
}
function getSensorData3() {
    //alert('눌려짐')
    $('#removedata1').empty();
    $('#removedata1').append('<h5>Total Sensor Graph3</h5>');
    $('#removedata2').empty();
    $('#removedata2').append('<canvas id="canvas" ></canvas>');
    // $('#removedata2').append('<canvas id="cvs" height="205.78"></canvas>');
    // console.log(removedata)
    // $('removedata').empty();
    // $('removedata').append('삭제되고 추가됐음');
}
function getSensorData4() {
    //alert('눌려짐')
    $('#removedata1').empty();
    $('#removedata1').append('<h5>Total Sensor Graph4</h5>');
    $('#removedata2').empty();
    $('#removedata2').append('<canvas id="canvas" ></canvas>');
    // console.log(removedata)
    // $('removedata').empty();
    // $('removedata').append('삭제되고 추가됐음');
}

