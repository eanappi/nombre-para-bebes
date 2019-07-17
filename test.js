fetch('https://randomuser.me/api/1.2/?nat=es&gender=female&results=2&inc=gender,name,nat')
  .then(response => response.json())
  .then(data => console.log(data))


  fetch('https://significadodenombres24.com/nombres-con-a/feed/')
  .then(response => response.json())
  .then(data => console.log(data))

  