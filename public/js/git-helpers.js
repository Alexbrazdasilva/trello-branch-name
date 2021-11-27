const clipboard = new ClipboardJS('.btn-d-block-1456')
const Promises = window.TrelloPowerUp.Promise
var t = window.TrelloPowerUp.iframe();


Promises.All([
  t.get('card', 'shared', 'trello-id'),
])
.spread((trelloId) => {
  console.log('trello-id', trelloId)
})
(() => {
  document.querySelector('#actions-github-1456').value = 'Alguma coisa'
})()
