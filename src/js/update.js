// Функция, которая обновляет страницу
function reloadPage() {
  location.reload()
}

// Событие resize
window.addEventListener('resize', function () {
  // Получаем текущую ширину окна
  const windowWidth = window.innerWidth

  // Проверяем, если ширина окна находится в заданном диапазоне
  if (windowWidth >= 360 && windowWidth <= 768) {
    reloadPage()
  }
  if (windowWidth >= 768 && windowWidth <= 1366) {
    reloadPage()
  }
})
