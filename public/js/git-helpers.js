const clipboard = new ClipboardJS('.btn-d-block-1456')

const Promises = TrelloPowerUp.Promise

Promises.All([
  TrelloInstance.get('card', 'shared', 'trello-id'),
])
.spread((trelloId) => {
  console.log('trello-id', trelloId)
})
