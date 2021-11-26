// settings for the client
function generateBranchName() {
  const hash = window.location.pathname.match(/\/c\/(.*?)\//)[0].replace(/\/c\//g, '').replace(/\//g, '')
  const branchName = hash
}

window.TrelloPowerUp.initialize({
  'board-buttons': function(t, options) {
    return [
      {
        icon: '👋',
        text: 'Copy branch name',
        callback: function(t, options) {
          t.alert('Copied!', 'Branch name copied to clipboard.')
        },
        condition: 'always'
      }
    ]
  }
})
