const button2 = document.querySelector('.button__two')
const button2_text = document.querySelector('.button__two--text')
const arrow_top = document.querySelector('.arrow__top')
const arrow_bottom = document.querySelector('.arrow__bottom')
const swiper__two = document.querySelector('.swiper.one')

button2.addEventListener('click', function () {
  if (swiper__two.style.height != 'auto') {
    swiper__two.style.height = 'auto'
    button2_text.innerHTML = 'Скрыть'
    arrow_bottom.style.display = 'none'
    arrow_top.style.display = 'flex'
  } else {
    swiper__two.style.height = '160px'
    button2_text.innerHTML = 'Показать все'
    arrow_top.style.display = 'none'
    arrow_bottom.style.display = 'flex'
  }
})
