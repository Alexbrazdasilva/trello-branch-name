const TrelloInframe = TrelloPowerUp.inframe({
  appKey: '9f5a91288ed267b276c4e73d145cd326',
  appName: 'Git Generate Branch Name'
})

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
  document.addEventListener('select-type-branch', ({ detail }) => {
    console.log('My value', detail)
    TrelloInframe.alert({ message: `${detail}` })
  })
