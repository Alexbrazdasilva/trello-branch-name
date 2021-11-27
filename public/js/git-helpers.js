const clipboard = new ClipboardJS('.btn-d-block-1456')
const Promise = window.TrelloPowerUp.Promise
const t = window.TrelloPowerUp.iframe({
  appKey: '9f5a91288ed267b276c4e73d145cd326',
  appName: 'Git Generate Branch Name'
});
Promise.all([
  t.get('card', 'public', 'all'),
  t.get('board', 'shared', 'all')
]).then(function (data) {
  console.log(data)
}).catch(function (err) {
  console.error(err)
})
t.card('name', 'shared').then(card => {
  console.log(card);
})

// (() => {
//   document.querySelector('#actions-github-1456').value = 'Alguma coisa'
// })()
