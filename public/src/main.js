const form = document.querySelector('#user-form')

form.addEventListener('submit', e => {
  e.preventDefault()
  // Pesron Info
  const username = document.querySelector('#username').value
  const email = document.querySelector('#email').value
  const password = document.querySelector('#password').value

  // Payment Info
  const firstname = document.querySelector('#fname').value
  const lastname = document.querySelector('#lname').value
  const cardnumber = document.querySelector('#cardno').value
  const month = document.querySelector('#month').value
  const year = document.querySelector('#year').value
  const cvv = document.querySelector('#cvv').value
  const country = document.querySelector('#country').value
  const zipcode = document.querySelector('#zipcode').value

  // Data to post
  const data = {
    username,
    email,
    password,
    firstname,
    lastname,
    cardnumber,
    month,
    year,
    cvv,
    country,
    zipcode
  }

  fetch('http://localhost:3000/user', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    redirect: 'follow'
  })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
})
