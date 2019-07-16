fetch('https://randomuser.me/api/1.2/?nat=es&gender=female&inc=gender,name,nat')
  .then(response => response.json())
  .then(data => console.log(data))