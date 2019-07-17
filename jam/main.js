import choiceNames from './components/choiceNames.js'


document.querySelectorAll('#home #female, #male').forEach((buttons) => {
  buttons.addEventListener("click", (element) => {
    let idButton = element.toElement.id
    let elementButtonSales = document.querySelector('#btn-sales')

    choiceNames(idButton) // Update name
    elementButtonSales.classList.remove('hide') // Show button by sales
  })
})