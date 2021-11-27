document
  .querySelectorAll('[data-action="select"]')
  .forEach(element => {
    element.addEventListener('click', ({ target }) => {
      const selectEvent = new CustomEvent('select-type-branch', {
        bubbles: false,
        detail: target.dataset.value
      })
      document.dispatchEvent(selectEvent)
    })
  })
