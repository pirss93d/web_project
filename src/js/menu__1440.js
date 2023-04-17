function menuCheck() {
  const iconBurger = document.querySelector('.icon__burger')
  const muneBurger = document.querySelector('.menu')

  document.addEventListener('DOMContentLoaded', function () {
    if (
      iconBurger.style.display === 'none' ||
      iconBurger.style.display === ''
    ) {
      muneBurger.style.display = 'block'
    } else {
      muneBurger.style.display = 'none'
    }
  })
}

window.addEventListener('resize', function () {
  const windowWidths = window.innerWidth
  if (windowWidths > 1366) {
    menuCheck()
  }
})
