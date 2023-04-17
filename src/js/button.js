const one__button = document.querySelector('.button__switch')
const one__section = document.querySelector('.info__block--two')
const bottom__arrows = document.querySelector('.icon__switch--bottom')
const top__arrows = document.querySelector('.icon__switch--top')
const text__appearance = document.querySelector('.text__translator')

one__button.addEventListener('click', function () {
  if (
    one__section.style.display === 'none' ||
    one__section.style.display === ''
  ) {
    one__section.style.display = 'block'
    one__button.innerHTML = 'Скрыть'
    bottom__arrows.style.display = 'none'
    top__arrows.style.display = 'flex'
    text__appearance.classList.remove('fade-in') // удаление класса
  } else {
    one__section.style.display = 'none'
    one__button.innerHTML = 'Читать далее'
    bottom__arrows.style.display = 'flex'
    top__arrows.style.display = 'none'
  }
})

one__button.addEventListener('click', function () {
  setTimeout(function () {
    text__appearance.classList.add('fade-in')
  }, 300)
})
