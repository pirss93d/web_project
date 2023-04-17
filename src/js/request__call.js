const request__close = document.querySelector('.request__call--close')
const display__request = document.querySelector('.request__call')
const phone__icon = document.querySelector('.menu__section--call')
const menu__request__check = document.querySelector('.menu')
request__close.addEventListener('click', function () {
  if (
    display__request.style.display === 'block' ||
    display__request.style.display === ''
  ) {
    display__request.style.display = 'none'
  } else {
    display__request.style.display = 'block'
  }
})

phone__icon.addEventListener('click', function () {
  if (
    display__request.style.display === 'none' ||
    display__request.style.display === ''
  ) {
    display__request.style.display = 'block'
  } else {
    display__request.style.display = 'none'
  }
})
