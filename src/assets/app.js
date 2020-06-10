'use strict'

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

$('.a-to-c').on('click', function () {
  $('.list-a-c').show()
  $('.list-d-f').hide()
  $('.list-g-i').hide()
  $('.list-j-l').hide()
  $('.list-m-o').hide()
  $('.list-p-r').hide()
  $('.list-s-u').hide()
  $('.list-v-z').hide()
})

$('.d-to-f').on('click', function () {
  $('.list-d-f').show()
  $('.list-a-c').hide()
  $('.list-g-i').hide()
  $('.list-j-l').hide()
  $('.list-m-o').hide()
  $('.list-p-r').hide()
  $('.list-s-u').hide()
  $('.list-v-z').hide()
})

$('.g-to-i').on('click', function () {
  $('.list-g-i').show()
  $('.list-a-c').hide()
  $('.list-d-f').hide()
  $('.list-j-l').hide()
  $('.list-m-o').hide()
  $('.list-p-r').hide()
  $('.list-s-u').hide()
  $('.list-v-z').hide()
})

$('.j-to-l').on('click', function () {
  $('.list-j-l').show()
  $('.list-a-c').hide()
  $('.list-d-f').hide()
  $('.list-g-i').hide()
  $('.list-m-o').hide()
  $('.list-p-r').hide()
  $('.list-s-u').hide()
  $('.list-v-z').hide()
})

$('.m-to-o').on('click', function () {
  $('.list-m-o').show()
  $('.list-a-c').hide()
  $('.list-d-f').hide()
  $('.list-g-i').hide()
  $('.list-j-l').hide()
  $('.list-p-r').hide()
  $('.list-s-u').hide()
  $('.list-v-z').hide()
})

$('.p-to-r').on('click', function () {
  $('.list-p-r').show()
  $('.list-a-c').hide()
  $('.list-d-f').hide()
  $('.list-g-i').hide()
  $('.list-j-l').hide()
  $('.list-m-o').hide()
  $('.list-s-u').hide()
  $('.list-v-z').hide()
})

$('.s-to-u').on('click', function () {
  $('.list-s-u').show()
  $('.list-a-c').hide()
  $('.list-d-f').hide()
  $('.list-g-i').hide()
  $('.list-j-l').hide()
  $('.list-m-o').hide()
  $('.list-p-r').hide()
  $('.list-v-z').hide()
})

$('.v-to-z').on('click', function () {
  $('.list-v-z').show()
  $('.list-a-c').hide()
  $('.list-d-f').hide()
  $('.list-g-i').hide()
  $('.list-j-l').hide()
  $('.list-m-o').hide()
  $('.list-p-r').hide()
  $('.list-s-u').hide()
})

$('.all-cities').on('click', function () {
  $('.list-s-u').show()
  $('.list-a-c').show()
  $('.list-d-f').show()
  $('.list-g-i').show()
  $('.list-j-l').show()
  $('.list-m-o').show()
  $('.list-p-r').show()
  $('.list-v-z').show()
})

$(document).ready(function(){
  $('#myInput').on('keyup', function() {
    const value = $(this).val().toLowerCase()
    $('.cities-column').filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    })
    $('.cities-list').filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    })
    $('.each-city').filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    })
  })
})
