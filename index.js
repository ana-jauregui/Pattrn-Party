$(document).ready( function() {

  $('.tab').each( (index, elem) => {

    if (!$(elem).hasClass('active')) {
      $(elem).siblings('article').hide();
    }
  })

  $('.tab').first().addClass('active').next().addClass('open').show()

  $('.tab').on('click', function() {

    if (!$(this).hasClass('active')) {

      $('.accordion-tabs .open').removeClass('open').hide();
      $(this).next().toggleClass('open').toggle();

      $('.accordion-tabs').find('.active').removeClass('active');
      $(this).addClass('active');

    } else {

      $('.accordion-tabs .open').removeClass('open').hide();
      $(this).removeClass('active');

    }
  });
});
