export default (gender = 'female') => {
  fetch(`https://randomuser.me/api/1.2/?nat=es&gender=${gender}&results=2&inc=gender,name,nat`)
  .then(response => response.json())
  .then(data => {
    let getNames = data.results.map(realname => realname.name.first).join(' ')
    let elementWriteName = document.querySelector('#home h1 span')

    elementWriteName.innerText = getNames
  })
}