const clipboard = new ClipboardJS('.btn-d-block-1456')
var t = window.TrelloPowerUp.iframe();


t.getAll()
.then(function (data) {
  console.log(JSON.stringify(data, null, 2));
})

// (() => {
//   document.querySelector('#actions-github-1456').value = 'Alguma coisa'
// })()
