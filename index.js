$('.tab').on('click', function() {

  $('.tab').removeClass('active');

  $('.tab-details').removeClass('active-tab-details');

  $(this).addClass('active');

  $('.tab span').text('+');

  $(this).find('span').text('-');

  $(this).next().addClass('active-tab-details');
})


$('.menu').on('click', function() {
  $('.nav-links-search').toggleClass('open');
  $('nav').toggleClass('move-btn');
})
