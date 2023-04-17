const chat = document.querySelector('.menu__section--chat')
const feedback = document.querySelector('.feedback__chat')

chat.addEventListener('click', function () {
  if (feedback.style.display === 'none' || feedback.style.display === '') {
    feedback.style.display = 'block'
  } else {
    feedback.style.display = 'none'
  }
})

const feedback__cross = document.querySelector('.cross__feedback')
const status__chat = document.querySelector('.feedback__chat')

feedback__cross.addEventListener('click', function () {
  if (status__chat.style.display === 'block') {
    status__chat.style.display = 'none'
  }
})
