const main = document.querySelector('.main')
//открывает бургер меню и блюрит область по зади на 4 px .
document.querySelector('.burger-menu').addEventListener('click', function () {
  const menu = document.querySelector('.menu')
  if (menu.style.display === 'none' || menu.style.display === '') {
    menu.style.display = 'block'
    main.style.filter = 'blur(5px)'
  } else {
    menu.style.display = 'none'
  }
})

//закрывает меню и делает блюр по умолчанию
const cross = document.querySelector('.menu__content--cross')
const cross__menu = document.querySelector('.menu')

cross.addEventListener('click', function () {
  if (cross__menu.style.display === 'block') {
    cross__menu.style.display = 'none'
    main.style.filter = 'blur(0px)'
  }
})
//Убирает меню и делает блюр по умолчанию
const screenbWidth = window.innerWidth
function closeModal() {
  if (screenbWidth < 1366) {
    cross__menu.style.display = 'none'
    main.style.filter = 'blur(0px)'
  }
}
document.querySelector('.main').addEventListener('click', closeModal)
