$(document).ready( function() {

  $('.accordion-tabs').children('li').first().children('a').addClass('active').next().addClass('open').show()

  $('.accordion-tabs').on('click', 'li > a', function() {

    if (!$(this).hasClass('active')) {

      $('.accordion-tabs .open').removeClass('open').hide();
      $(this).next().toggleClass('open').toggle();

      $('.accordion-tabs').find('.active').removeClass('.active');
      $(this).addClass('.active');
      
    } else {

      $('.accordion-tabs .open').removeClass('.open').hide();
      $(this).removeClass('active');

    }
  });
});
