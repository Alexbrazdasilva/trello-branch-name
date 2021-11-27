// Icons
const grayIcon = 'https://cdn.hyperdev.com/us-east-1%3A3d31b21c-01a0-4da2-8827-4bc6e88b7618%2Ficon-gray.svg'

TrelloPowerUp.initialize({
  'card-buttons': function(t, options) {
    return [
      {
        icon: grayIcon,
        text: 'Git Helpers',
        callback: function(t, options) {
          t.popup({
            title: 'Git Helpers',
            url: 'git-helpers.html',
            height: 40
          })
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
            height: 80
          })
        },
        condition: 'always'
      }
    ]
  }
}, {
  appKey: '9f5a91288ed267b276c4e73d145cd326',
  appName: 'Git Generate Branch Name'
})
