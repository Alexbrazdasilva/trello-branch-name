const clipboard = new ClipboardJS('.btn-d-block-1456')
const Promise = window.TrelloPowerUp.Promise
const t = window.TrelloPowerUp.iframe({
  appKey: '9f5a91288ed267b276c4e73d145cd326',
  appName: 'Git Generate Branch Name'
})

t.set('card', 'shared', 'branch-name', 'feat/1234')


document.querySelector('#actions-github-1456').value = 'Alguma coisa'

