const form = document.querySelector('#options-1456')
const select = document.querySelector('#options-select')
const t = window.TrelloPowerUp.iframe({
  appKey: '9f5a91288ed267b276c4e73d145cd326',
  appName: 'Git Generate Branch Name'
})
function sendTypeBranch (event) {
  event.preventDefault()
  t.set('card', 'shared', 'type-branch', select.value)
  .then(() => {
    t.closePopup()
  })
  .then(() => {
    t.alert({
      message: 'Successfully 🎉'
    })
  })
}

form.addEventListener('submit', sendTypeBranch)

t.render(() => {
  t.get('card', 'shared', 'type-branch').then((data) => {
    select.value = data
  })
  t.sizeTo('#options-1456').done()
})
