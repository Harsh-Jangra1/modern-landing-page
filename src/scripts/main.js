const menuToggle = document.getElementById('menu-toggle')
const mobileMenu = document.getElementById('mobile-menu')
const backToTop = document.getElementById('back-to-top')
const header = document.getElementById('site-header')

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden')
  menuToggle.innerHTML = mobileMenu.classList.contains('hidden')
    ? '<i class="fa-solid fa-bars text-lg"></i>'
    : '<i class="fa-solid fa-xmark text-lg"></i>'
})

document.querySelectorAll('#mobile-menu a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden')
    menuToggle.innerHTML = '<i class="fa-solid fa-bars text-lg"></i>'
  })
})

document.querySelectorAll('.faq-question').forEach((button) => {
  button.addEventListener('click', () => {
    const answer = button.nextElementSibling
    const icon = button.querySelector('.faq-icon')
    const isOpen = !answer.classList.contains('hidden')

    document.querySelectorAll('.faq-answer').forEach((item) => item.classList.add('hidden'))
    document.querySelectorAll('.faq-icon').forEach((item) => (item.textContent = '+'))

    if (!isOpen) {
      answer.classList.remove('hidden')
      icon.textContent = '−'
    }
  })
})

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show')
      }
    })
  },
  { threshold: 0.12 },
)

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))

window.addEventListener('scroll', () => {
  if (window.scrollY > 240) {
    backToTop.classList.remove('hidden')
    header.classList.add('shadow-soft')
  } else {
    backToTop.classList.add('hidden')
    header.classList.remove('shadow-soft')
  }
})

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
})

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault()
  alert('Message sent successfully. Replace this with your backend integration.')
  e.target.reset()
})

document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('a[href^="#"]')
  links.forEach((link) => {
    link.addEventListener('click', function (e) {
      e.preventDefault()
      const targetId = this.getAttribute('href')
      const targetElement = document.querySelector(targetId)
      targetElement.scrollIntoView({ behavior: 'smooth' })
    })
  })

  const faqItems = document.querySelectorAll('.faq-item')
  faqItems.forEach((item) => {
    const question = item.querySelector('.faq-question')
    question.addEventListener('click', function () {
      const answer = item.querySelector('.faq-answer')
      answer.classList.toggle('hidden')
      answer.classList.toggle('fade-in')
    })
  })
})
