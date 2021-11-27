// Icons
const grayIcon = 'https://cdn.hyperdev.com/us-east-1%3A3d31b21c-01a0-4da2-8827-4bc6e88b7618%2Ficon-gray.svg'


function generateBranchName() {
  const hash = window.location.pathname
    .match(/\/c\/(.*?)\//)[0]
    .replace(/\/c\//g, '')
    .replace(/\//g, '')
  const branchName = `card/${hash}`
  return branchName
}

async function copyInToClipboard(text, instance) {
  try {
    await window.navigator.clipboard.writeText(text)
    instance.alert('Copied!', 'Branch name copied to clipboard.')
  } catch (err) {
    instance.alert(`Error: ${err}`)
  }
}
const Promise = TrelloPowerUp.Promise

TrelloPowerUp.initialize({
  'card-buttons': function(t, options) {
    return [
      {
        icon: grayIcon,
        text: 'Copy branch name',
        callback: function(t, options) {
          copyInToClipboard(generateBranchName(), t)
        },
        condition: 'always'
      },
      {
        icon: grayIcon,
        text: 'Select Activity',
        callback: function(t, options) {
          t.popup({
            title: 'Select Activity',
            url: 'options.html',
            height: 300,
            width: 300
          })
        },
        condition: 'always'
      }
    ]
  }
})
