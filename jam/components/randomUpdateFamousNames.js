import listNamesFamous from '../content/list_names_famous.js'

export default () => {
  let el = document.querySelector('#famous-names')
  let indexRandomName = Math.floor((Math.random() * 99) + 0)
  let definitionName = listNamesFamous()[indexRandomName]
  let template = `
    <div class="section-inner">
        <div class="container">
            <div class="row mb60 text-center">
                <div class="col-sm-12">
                    <h3 class="section-title">${definitionName.name}</h3>
                    <p class="section-sub-title">...guarda secretos y ellos son...</p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                <p class="lead text-center">${definitionName.description}</p>
                </div>
            </div>
        </div>
    </div>
  `

  el.innerHTML = template
}