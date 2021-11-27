// Icons
const icons = {
  git: 'https://www.svgrepo.com/show/368726/git-branch.svg',
  commit: 'https://www.svgrepo.com/show/361178/git-commit.svg',
  select: 'https://www.svgrepo.com/show/361821/select.svg'
}

TrelloPowerUp.initialize(
  {
    'card-buttons': function (t, options) {
      return [
        {
          icon: icons.git,
          text: 'Git Helpers',
          callback: function (t, options) {
            t.popup({
              title: 'Git Helpers',
              url: 'git-helpers.html',
              height: 160,
            });
          },
          condition: 'always',
        },
        {
          icon: icons.select,
          text: 'Select Activity',
          callback: function (t, options) {
            t.popup({
              title: 'Select Activity',
              url: 'options.html',
              height: 80,
            });
          },
          condition: 'always',
        },
      ];
    },
    'card-badges': function (t, options) {
      return t.get('card', 'shared', 'branch-name').then((data) => {
        return data ? [
          {
            icon: icons.git,
            text: data
          }
        ]
        : []
      })
    },
    'card-detail-badges': function (t, options) {
      return t.get('card', 'shared', 'branch-name').then((data) => {
        return data ? [
          {
            title: 'Branch',
            text: data ? data : 'undefined',
          }
        ] 
        : []
      })
    }
  },
  {
    appKey: '9f5a91288ed267b276c4e73d145cd326',
    appName: 'Git Generate Branch Name',
  }
);
