// Icons
const grayIcon = 'https://cdn.hyperdev.com/us-east-1%3A3d31b21c-01a0-4da2-8827-4bc6e88b7618%2Ficon-gray.svg'


function generateBranchName(TrelloInstance) {
  TrelloInstance.card('all').then(card => {
    console.log('card:\n', JSON.stringify(card, null, 2))
  })
  const hash = '123456'
  const branchName = `card/${hash}`
  return branchName
}

async function copyInToClipboard(TrelloInstance, options) {
  try {
    await window.navigator.clipboard.writeText(generateBranchName(TrelloInstance))
    TrelloInstance.alert('Copied!', 'Branch name copied to clipboard.')
  } catch (err) {
    TrelloInstance.alert(`Error: ${err}`)
  }
}
const Promise = TrelloPowerUp.Promise

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
