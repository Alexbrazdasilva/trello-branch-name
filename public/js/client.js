// settings for the client
const TrelloInframe = window.TrelloPowerUp.iframe()
const grayIcon = 'https://cdn.hyperdev.com/us-east-1%3A3d31b21c-01a0-4da2-8827-4bc6e88b7618%2Ficon-gray.svg'

function generateBranchName() {
  const hash = window.location.pathname.match(/\/c\/(.*?)\//)[0].replace(/\/c\//g, '').replace(/\//g, '')
  const branchName = `card/${hash}`
  return branchName
}

async function copyInToClipboard(text) {
  try {
    await window.navigator.clipboard.writeText(text)
  } catch (err) {
    TrelloInframe.alert(`Error: ${err}`)
  }
}

window.TrelloPowerUp.initialize({
  'board-buttons': function(t, options) {
    return [
      {
        icon: grayIcon,
        text: 'Copy branch name',
        callback: function(t, options) {
          const branchName = generateBranchName()
          copyInToClipboard(branchName)

          t.alert('Copied!', 'Branch name copied to clipboard.')
        },
        condition: 'always'
      }
    ]
  }
})
