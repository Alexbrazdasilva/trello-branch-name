const clipboard = new ClipboardJS('.btn-d-block-1456')
const Promises = TrelloPowerUp.Promise
const t = TrelloPowerUp.inframe()


Promises.All([
  t.get('card', 'shared', 'trello-id'),
])
.spread((trelloId) => {
  console.log('trello-id', trelloId)
})
(() => {
  document.querySelector('#actions-github-1456').value = 'Alguma coisa'
})()
