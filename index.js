document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListenerJ('submit', (e) => {
    e.preventDefault()

    const txt = document.getElementById('new-task-descriptiom').value
    const li = document.createElement('li')
    const btn = document.createElement('button')
    btn.addEventListener('click', runDelete)
    btn.textContent = 'x'
    li.textContent = txt
    li.appendChild(btn)
    document.querySelector('#tasks').appendChild(li)
  })
  function runDelete(e) {
    e.target.parentNode.remove()
  }

})