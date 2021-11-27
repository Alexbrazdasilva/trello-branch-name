document
  .querySelectorAll('[data-action="select"]')
  .forEach(element => {
    element.addEventListener('click', ({ target }) => {
      const selectEvent = new CustomEvent('select-type-branch', {
        bubbles: false,
        payload: target.dataset.value
      })
      document.dispatchEvent(selectEvent)
    })
  })
document.addEventListener('select-type-branch', event => {
  console.log('My value', event)
})
