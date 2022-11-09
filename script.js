const post = document.getElementById('put')
const nameInput = document.getElementById('nameInput')
const ratingInput = document.getElementById('ratingInput')
post.addEventListener('click', postInfo)


async function postInfo() {
  if (nameInput.value == '' || ratingInput.value == '') { 
    alert('please enter all details')
    return
  } if (ratingInput.value > 5) {
    alert('between 0 and 5')
    return
  }
  const response = await fetch('http://localhost:6002/', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      userInfo: nameInput.value,
      userRating: ratingInput.value
    })
  })
  const inputs = document.querySelectorAll('input')
  inputs.forEach(i => {
    i.value = ''
  });
}