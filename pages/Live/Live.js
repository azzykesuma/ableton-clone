const learn = document.getElementById('learn')
const learnMore = document.querySelector('.learnMore')

learn.addEventListener('click', () => {
    learnMore.classList.toggle('active')
})