function initSwiper() {
  const windowWidth = window.innerWidth
  const mediaQueryBreakpoint = 768 // Устанавливаем пороговое значение ширины экрана

  if (windowWidth < mediaQueryBreakpoint) {
    const swiper1 = new Swiper('.swiper', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      spaceBetween: 16,
      slidesPerView: 1.32,
      slideToClickedSlide: true,
      loop: true
    })
    const swiper2 = new Swiper('.swiper .swiper2', {
      pagination: {
        el: '.swiper2 .swiper-pagination',
        clickable: true
      },
      spaceBetween: 16,
      slidesPerView: 1.32,
      slideToClickedSlide: true,
      loop: true
    })
    const swiper3 = new Swiper('#thirdSwiper', {
      pagination: {
        el: '#thirdSwiper.swiper3-pagination',
        clickable: true
      },
      spaceBetween: 16,
      slidesPerView: 1.225,
      slideToClickedSlide: true,
      loop: true
    })
  }
}

// Запускаем инициализацию Swiper при загрузке страницы
window.onload = function () {
  initSwiper()
}
