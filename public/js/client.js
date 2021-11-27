const Promise = TrelloPowerUp.Promise
// Icons
const grayIcon = 'https://cdn.hyperdev.com/us-east-1%3A3d31b21c-01a0-4da2-8827-4bc6e88b7618%2Ficon-gray.svg'


function generateBranchName(TrelloInstance) {
  let branchName = ''
  TrelloInstance.card('all').then(({ shortLink }) => {
    branchName = `card/${shortLink}`
  })
  return branchName
}

async function copyInToClipboard(TrelloInstance, options) {
  try {
    await window.navigator.clipboard.writeText(generateBranchName(TrelloInstance))
  } catch (err) {
    console.error(`Error: ${err}`)
  }
}

TrelloPowerUp.initialize({
  'card-buttons': function(t, options) {
    return [
      {
        icon: grayIcon,
        text: 'Copy branch name',
        callback: copyInToClipboard,
        condition: 'always'
      },
      {
        icon: grayIcon,
        text: 'Select Activity',
        callback: function(t, options) {
          t.popup({
            title: 'Select Activity',
            url: 'options.html',
            height: 180,
            width:  200
          })
        },
        condition: 'always'
      }
    ]
  }
})
