const clipboard = new ClipboardJS('.btn-d-block-1456')
var t = window.TrelloPowerUp.iframe();

t.card('name', 'shared').then(card => {
  console.log(card);
})

// (() => {
//   document.querySelector('#actions-github-1456').value = 'Alguma coisa'
// })()
