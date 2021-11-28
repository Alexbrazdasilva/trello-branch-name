const icons = {
  git: 'https://www.svgrepo.com/show/368726/git-branch.svg',
  commit: 'https://www.svgrepo.com/show/361178/git-commit.svg',
  select: 'https://www.svgrepo.com/show/361821/select.svg'
}

const colors = {
  ref: 'blue', 
  feat: 'green',
  fix: 'red',
  perf: 'yellow',
  rel: 'purple'
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
              height: 200,
            });
          },
          condition: 'always',
        },
      ];
    },
    'card-badges': function (t, options) {
      return t.get('card', 'shared').then((data) => {
        const type = data['type-branch'] ? data['type-branch'] : 'feat'
        return data ? [
          {
            title: 'Branch',
            text: data['branch-name'],
            color: colors[type],
          }
        ]
        : []
      })
    },
    'card-detail-badges': function (t, options) {
      return t.get('card', 'shared').then((data) => {
        const type = data['type-branch'] ? data['type-branch'] : 'feat'
        return data ? [
          {
            dinamyc: function() {
              return {
                title: 'Branch',
                text: data['branch-name'],
                color: colors[type],
                refresh: 16
              }
            },
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
