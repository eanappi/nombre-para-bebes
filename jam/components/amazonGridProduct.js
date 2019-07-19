import amazonProductsList from '../content/amazonProductsList.js'

export default (element) => {
  let el = document.querySelector(element)

  let template = `
    <div class="section-inner">
        <div class="container">
          <div class="row mb60 text-center">
                <div class="col-sm-12">
                    <h3 class="section-title">Regala YA !!!</h3>
                    <p class="section-sub-title">Elegí lo mejor para él...</p>
                </div>
            </div>
            <div class="row">
              <div class="col-md-10 col-sm-offset-1">
              <div class="row">
                  ${amazonProductsList().map(itemURL => {
                    return `
                      <div class="col-md-3 text-center">
                        <iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="${itemURL}"></iframe>
                      </div>
                    `
                  }).join('')}
                </div>
            </div>
            </div>
        </div>
    </div>
  `

  el.innerHTML = template
}