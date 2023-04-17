const button__header__call = document.querySelector('.icon__call')
const request__call__check = document.querySelector('.request__call')
const header__check__menu = document.querySelector('.menu')
const blur__main = document.querySelector('.main')
const button__header__chat = document.querySelector('.icon__chat')
const feedback__chat__check = document.querySelector('.feedback__chat')

button__header__call.addEventListener('click', function () {
  if (
    header__check__menu.style.display === 'none' ||
    header__check__menu.style.display === ''
  ) {
    header__check__menu.style.display = 'block'

    if (
      header__check__menu.style.display === 'block' ||
      header__check__menu.style.display === ''
    ) {
      request__call__check.style.display = 'block'
      blur__main.style.filter = 'blur(5px)'
    } else {
      header__check__menu.style.display = 'none'
    }
  } else {
    header__check__menu.style.display = 'none'
    blur__main.style.filter = 'blur(0px)'
  }
})

button__header__chat.addEventListener('click', function () {
  if (
    header__check__menu.style.display === 'none' ||
    header__check__menu.style.display === ''
  ) {
    header__check__menu.style.display = 'block'
    blur__main.style.filter = 'blur(5px)'
    if (header__check__menu.style.display === 'block') {
      feedback__chat__check.style.display = 'block'
    } else {
      feedback__chat__check.style.display = 'none'
    }
  } else {
    header__check__menu.style.display = 'none'
    blur__main.style.filter = 'blur(0px)'
  }
})
