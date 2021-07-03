const sr = ScrollReveal({
  origin: 'top',
  distance: '50px',
  duration: 2000,
  reset: true
})

document.querySelector('#garantir').addEventListener('click', event => {
  event.preventDefault()
})


sr.reveal('.informative-card1')
sr.reveal('.informative-card2')
sr.reveal('.informative-card3')
sr.reveal('.mars')
sr.reveal('button')
sr.reveal('.rocket-img')