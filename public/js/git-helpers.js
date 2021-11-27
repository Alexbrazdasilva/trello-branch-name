const clipboard = new ClipboardJS('.btn-d-block-1456')
const nameBranch = document.querySelector('#actions-github-1456')
const Promise = window.TrelloPowerUp.Promise
const t = window.TrelloPowerUp.iframe({
  appKey: '9f5a91288ed267b276c4e73d145cd326',
  appName: 'Git Generate Branch Name'
})


t.set('card', 'shared', 'branch-name', 'feat/1234')
  .then(() => {
    console.log('The every tasks completeds')
  })
t.card('all')
  .then((data) => {
    console.log(data)
  }
)
t.render(() => {
  return t.get('card', 'shared', 'branch-name').then((branchName) => {
    nameBranch.value = branchName
  })
})
