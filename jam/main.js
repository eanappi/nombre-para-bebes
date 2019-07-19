import choiceNames from './components/choiceNames.js'
import randomUpdateFamousNames from './components/randomUpdateFamousNames.js'
import amazonGridProduct from './components/amazonGridProduct.js'


(function() {
  // Random update of section famous names
  randomUpdateFamousNames('#famous-names')

  // Gender listen button
  document.querySelectorAll('#home #female, #male').forEach((buttons) => {
    buttons.addEventListener("click", (element) => {
      let idButton = element.target.id
      let elementButtonSales = document.querySelector('#btn-sales')

      choiceNames(idButton) // Update name
      elementButtonSales.classList.remove('hide') // Show button by sales
    })
  })

  amazonGridProduct('#sales')
})()