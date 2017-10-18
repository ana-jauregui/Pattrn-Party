$('.tab').click((e) => {

  const target = $(e.target);

  const className = ((target).text().split(' ')).join('').toLowerCase();

  if (target.is('.tab')) {

    $(`.${className}-details`).show()

    $(`.${className}`).addClass('active')

    $(`.${className}`).siblings().each((idx, el)  => {

      const tabClass = $(el).text().split(' ').join('').toLowerCase()

      $(`.${tabClass}`).removeClass('active')
    })

    target.siblings('div').each((i, elem) => {

      const newClass = ($(elem).text()).split(' ').join('').toLowerCase()

      $(`.${newClass}-details`).hide()
    })
  }
})

$(window).resize( () => {

  if (window.matchMedia('(max-width: 750px)').matches) {

    $('.tab-content').children().each((i, el) => {

      $(el).show();
      $(el).removeClass('hidden');
    })
  }

    $('.mobile-tab').click((e) => {

        const target = $(e.target);

        const className = ('mob-' +  $(target).find('h4').text().split(' ').join('').toLowerCase())

        if (target.is('.mobile-tab')) {

          $(`.${className}-details`).show()

          $(`.${className}`).toggleClass('selected')

          if (!(target.hasClass('selected'))) {
            $(`.${className}-details`).hide()
          }

          // target.parent().siblings().each((i, elem) => {
          //   console.log($(elem).children());
          // })
        }
    })
  // }
})
