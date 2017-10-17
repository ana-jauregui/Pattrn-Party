$('.tab').click((e) => {

  const target = $(e.target);
  const className = ((target).text().split(' ')).join('').toLowerCase()

  if (target.is('.tab')) {

    $(`.${className}-details`).show()

    $(`.${className}`).addClass('active')

    //take active class off all non-selected tabs
    $(`.${className}`).siblings().each((idx, el)  => {

      const tabClass = $(el).text().split(' ').join('').toLowerCase()

      $(`.${tabClass}`).removeClass('active')
    })

    //hide all detailed content of non-selected tab
    target.siblings('div').each((i, elem) => {

      const newClass = ($(elem).text()).split(' ').join('').toLowerCase()

      $(`.${newClass}-details`).hide()
    })
  }
})
