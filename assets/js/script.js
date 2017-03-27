
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
        $('#nav-icon').toggleClass('open');
    });
    $(function() {
        $('a[href*=#]:not([href=#],[data-toggle],[data-target],[data-slide])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
    var fixed = false;
    $(document).scroll(function() {
        if ($(this).scrollTop() > 250) {
            if (!fixed) {
                fixed = true;
                $('#to-top').show("slow", function() {
                    $('#to-top').css({
                        position: 'fixed',
                        display: 'block'
                    });
                });
            }
        } else {
            if (fixed) {
                fixed = false;
                $('#to-top').hide("slow", function() {
                    $('#to-top').css({
                        display: 'none'
                    });
                });
            }
        }
    });
$(function(){
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        var os1 = $('#about').offset().top; 
        var os2 = $('#portfolio').offset().top + $('#portfolio').height() -1;
        if(scroll >= os1 && scroll <= os2){
            $('#nav-icon span').css('backgroundColor','#443a8b');
            $('#to-top').css('color','#443a8b');
        }else{
             $('#nav-icon span').css('backgroundColor','');
             $('#to-top').css('color','');
        }
    });
});
var topMon = $("#monitor1").offset().top;
var leftMon = $("#monitor1").offset().left;
var topVect = $("#vector1").offset().top;
var leftVect = $("#vector1").offset().left;
var topCode = $("#code1").offset().top;
var leftCode = $("#code1").offset().left;
$( "html,body" ).mousemove(function( event ) {
    $('#monitor1').css({
        top :  event.pageY / 100 + topMon + "px",
        left:  event.pageX / 100 + leftMon + "px"
    });
    $('#vector1').css({
        top :  event.pageY / 100 + topVect + "px",
        left:  event.pageX / 100 + leftVect + "px"
    });
    $('#code1').css({
        top :  event.pageY / 100 + topCode + "px",
        left:  event.pageX / 100 + leftCode + "px"
    });
});

function slide(num){
    var position1 = num * -400 + "px";
    var position2title = -600 + num * 200 + "px";
    var position2slide = num * -250 + "px";
   if ($(window).width()>=1330) {
            $('.education').animate({
                top: position1
            },1000);
            $('.titleSlide').animate({
                right: position1
            },1000);
        }else{
            $('.education').animate({
                top: position2slide
            },1000);
            $('.titleSlide').animate({
                top: position2title
            },1000);
        }
}

$('#btn1').click(function(){
    slide(0);
    setImgNonActive();
    $(this).find('img').attr("src","assets/img/activeEdu.png");
});
$('#btn2').click(function(){
    slide(1);
    setImgNonActive();
    $(this).find('img').attr("src","assets/img/activeMon.png");
});
$('#btn3').click(function(){
    slide(2);
    setImgNonActive();
    $(this).find('img').attr("src","assets/img/programmer1.png");
});
$('#btn4').click(function(){
    slide(3);
    setImgNonActive();
    $(this).find('img').attr("src","assets/img/idea1.png");
});

function setImgNonActive(){
   $("#btn1").find('img').attr("src","assets/img/nonactiveEdu.png"); 
   $('#btn2').find('img').attr("src","assets/img/nonactiveMon.png");
   $('#btn3').find('img').attr("src","assets/img/programmer.png");
   $('#btn4').find('img').attr("src","assets/img/idea.png");
}