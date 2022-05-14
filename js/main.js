//
window.addEventListener('scroll', onScroll)

onScroll() //preciso chamar a função
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  //verificar se a seção passou da linha?
  //quais dados vou precisar?

  //o top da seção
  const sectionTop = section.offsetTop

  //altura da seção
  const sectionHeight = section.offsetHeight

  //o topo da seção chegou ou ultrapssou a linha alvo
  // const sectionTopReachOrPassedTargetline = targetLine >= sectionTop
  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

  //verificar se a base está abaixo da linha alvo

  // const sectionEndsAt = sectionTop + sectionHeight //a seção termina onde?
  const sectionEndsAt = sectionTop + sectionHeight

  //o final da seção passou da linha alvo
  // const sectionEndPassedTargetLine = sectionEndsAt <= targetLine
  const sectionEndPassedTargetline = sectionEndsAt <= targetLine

  //limites da seção
  // const sectionBoundaries =
  const sectionBoundaries =
    // sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetline
    sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline

  // const sectionId = section.getAttribute('id')
  const sectionId = section.getAttribute('id')

  // const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  // menuElement.classList.remove('active')
  menuElement.classList.remove('active')

  // if (sectionBoundaries) {
  if (sectionBoundaries) {
    // menuElement.classList.add('active')
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 550) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}
function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

//ScrollReveal
//tudo que tiver ponto no javascript, é cosiderado um objeto.
//ScrollReveal(arumento da função).reveal("quem vai ser revelado.")
// para criar um objeto colocamos um par de chaves {}
ScrollReveal({
  /*no JavaScript quando acabar uma linha de código colocar a vírgula. */
  origin: 'bottom' /*de onde a animação vai vim*/,
  distance: '500px' /*distancia que a animação vai ter */,
  duration: 1000
}).reveal(
  //eu só consigo quebrar uma linha de código,sendo string,usando o acento agundo para abrir e fechar a cadeia de caractere.
  `#home,
  #service,
  #services header`
) /*aqui estamos configurando quem vai aparecer primeiro */

ScrollReveal({
  origin: 'right',
  distance: '1082px',
  duration: 1000
}).reveal(`#home img, #home .stats`)

ScrollReveal({
  origin: 'left',
  distance: '1082px',
  duration: 1000
}).reveal(`#services .card1
`)
ScrollReveal({
  origin: 'right',
  distance: '1082px',
  duration: 1000
}).reveal(`#services .card2`)
