const btn = document.getElementById('btns')
const rate = document.getElementById('selected-rate')
const submit = document.getElementById('submit')
const card = document.getElementById('card')
const tyCard = document.getElementById('ty-card')

btn.addEventListener('click', e => {
  const rating = e.target.textContent
  rate.textContent = rating;
})

const selectedRate = e => {
  if (!rate.textContent) return alert('You must choose a value in order to submit a rating')
  removeDisplay()
  card.classList.add('display')
}

const removeDisplay = () => {
  tyCard.classList.remove('display')
}

submit.addEventListener('click', selectedRate)
