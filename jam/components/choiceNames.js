const elementWriteName = document.querySelector('#home h1 span')

export default (gender = 'female') => {
  fetch(`https://randomuser.me/api/1.2/?nat=es&gender=${gender}&results=2&inc=gender,name,nat`)
  .then(response => {
    if (response.ok) {
      return response.json().then(data => {
        let getNames = data.results.map(realname => realname.name.first).join(' ')

        elementWriteName.innerText = getNames
      })
    } else {
      elementWriteName.innerText = `Intentelo de nuevo ...`
    }
  })
}