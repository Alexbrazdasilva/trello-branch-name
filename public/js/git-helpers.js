const clipboard = new ClipboardJS('.btn-d-block-1456')
const nameBranch = document.querySelector('#actions-github-1456')
const commitTitle = document.querySelector('#commit-github-1456')
const helperBranche = document.querySelector('#helper-branch-github-1456')
const Promise = window.TrelloPowerUp.Promise

const t = window.TrelloPowerUp.iframe({
  appKey: '9f5a91288ed267b276c4e73d145cd326',
  appName: 'Git Generate Branch Name'
})

function getDataSaved(visibility = 'shared') {
  return t.get('card', visibility)
}

function setBranchName(name = '') {
  t.set('card', 'shared', 'branch-name', name)
}

function setHelperBranche(branch = '') {
  const helper = `git checkout -b ${branch}`
  helperBranche.value = helper
}

function setCommitTitle(title = '', branch) {
  const titleCommit = title.substring(0, 45)
  const formatedCommitTitle = `${titleCommit} [${branch}]`
  t.set('card', 'shared', 'commit-title', formatedCommitTitle)
}

function setHelpers({ shortLink, name }) {
  getDataSaved().then(data => {
    const formatName = `${data['type-branch'] || 'branch'}/${shortLink}`
    setBranchName(formatName)
    setHelperBranche(formatName)
  })
  setCommitTitle(name, shortLink)
}

function setValuesInInputs(data) {
  nameBranch.value = data['branch-name']
  commitTitle.value = data['commit-title']
}

t.card('all').then(setHelpers)

t.render(() => {
  getDataSaved().then(setValuesInInputs)
  t.sizeTo('#git-helpers').done()
})
