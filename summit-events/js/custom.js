
$(function(){	
    $('.navbar-nav li a').click(function() {
     if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
       var target = $(this.hash);
       target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
       if (target.length) {
         $('html, body').animate({
           scrollTop: target.offset().top -70 /*- or + value for target element position*/
         }, 1000);
         return false;
       }
     }
    });
});

$(document).on("scroll", function(){
    if
        ($(document).scrollTop() > 100){
            $(".header_outer").addClass("shrink");
        }
    else
    {
        $(".header_outer").removeClass("shrink");
    }
});
 
 
 $('.video_slider').slick({
    dots: false,
    infinite: true,
    slidesToShow: 4,
    arrows: true,
    slidesToScroll: 1,
    responsive: [
    {
        breakpoint: 1200,
        settings: {
            slidesToShow: 3
        }
    },
    {
        breakpoint: 991,
        settings: {
            slidesToShow: 2
        }
    },
    {
        breakpoint: 575,
        settings: {
            slidesToShow: 1
        }
    }
    ]
});
$('.txt_slider').slick({
    dots: false,
    infinite: true,
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1
});
$('.blog_slider').slick({
    dots: false,
    infinite: true,
    slidesToShow: 4,
    arrows: true,
    slidesToScroll: 1,
    responsive: [
    {
        breakpoint: 1200,
        settings: {
            slidesToShow: 2
        }
    },
    {
        breakpoint: 575,
        settings: {
            slidesToShow: 1
        }
    }
    ]
});
$(document).ready(function(){
	$(".hdng_pnnl").click(function(){

        if($(this).hasClass('d_arrow')){
            $(this).removeClass('d_arrow');
        }else{
            $('.hdng_pnnl').removeClass("d_arrow");
            $(this).addClass("d_arrow");
        }
		
	$(this).parents(".agenda_rghtPnnl").find(".accordin_pannl").stop().slideToggle();
	$('.accordin_pannl').not($(this).parents(".agenda_rghtPnnl").find(".accordin_pannl")).slideUp();
});
		
})
setInterval(function() { makeTimer(); }, 1000);
/*--countdown timer--*/
function makeTimer() {
    var endTime = new Date("Nov 7, 2019 14:00:00 GMT");			
    var endTime = (Date.parse(endTime)) / 1000;

    var now = new Date();
    var now = (Date.parse(now) / 1000);

    var timeLeft = endTime - now;

    var days = Math.floor(timeLeft / 86400); 
    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
    var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

    if (days < "10") { days = "0" + days; }
    if (hours < "10") { hours = "0" + hours; }
    if (minutes < "10") { minutes = "0" + minutes; }
    if (seconds < "10") { seconds = "0" + seconds; }

    $("#days").html(days + "<span class='time_tag'>Days</span>");
    $("#hours").html(hours + "<span class='time_tag'>Hours</span>");
    $("#minutes").html(minutes + "<span class='time_tag'>Mins</span>");
    $("#seconds").html(seconds + "<span class='time_tag'>Secs</span>");
}

// $(document).ready(function () {
//     size_li = $(".speaker_outer .spekr_cls").length();
//     x=3;
//     $('.speaker_outer .spekr_cls:lt('+x+')').show();
//     $('#load_more').click(function () {
//         x= (x+5 <= size_li) ? x+5 : size_li;
//         $('.speaker_outer .spekr_cls:lt('+x+')').show();
//     });
// });

$(document).ready(function(){
    $(".spekr_cls").slice(0, 12).show();
    $("#load_more").on("click", function(e){
      e.preventDefault();
      $(".spekr_cls:hidden").slice(0, 8).slideDown();
      if($(".spekr_cls:hidden").length == 0) {
        $("#load_more a").text("No Content").addClass("basic_btn");
      }
    });
})

/*--end--*/