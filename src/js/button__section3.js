const button__three = document.querySelector('.button__three')
const swiper__two = document.querySelector('.swiper.swiper2')
const arrow__swiper2_top = document.querySelector(
  '.button__three--arrows .arrow__top'
)
const arrow__swiper2_bottom = document.querySelector(
  '.button__three--arrows .arrow__bottom'
)
const button__three_text = document.querySelector('.button__three--text')

button__three.addEventListener('click', function () {
  if (swiper__two.style.height != 'auto') {
    swiper__two.style.height = 'auto'
    arrow__swiper2_bottom.style.display = 'none'
    arrow__swiper2_top.style.display = 'block'
    button__three_text.innerHTML = 'Скрыть'
  } else {
    swiper__two.style.height = '165px'
    arrow__swiper2_bottom.style.display = 'block'
    arrow__swiper2_top.style.display = 'none'
    button__three_text.innerHTML = 'Показать все'
  }
})
