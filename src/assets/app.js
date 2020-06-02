function checkScroll(){
    const scrolling = $('.navbar').height()
    const main = $('.main-page').offset().top;
    const windows = $(window).scrollTop()

    if(windows > scrolling && windows < main){
        $('.navbar').addClass("scrolled");
    }else{
        $('.navbar').removeClass("scrolled");
    }
}

if($('.navbar').length > 0){
    $(window).on("scroll load resize", function(){
        checkScroll();
    });
}

$(window).scroll(function() {
  $('.navbar').trigger('reset')

  if ( $(this).scrollTop() >= 500 ) {
    $('.navbar').addClass('scrolled-main');
  } else if ( $(this).scrollTop() <= 540) {
    $('.navbar').removeClass('scrolled-main')
  }
});
