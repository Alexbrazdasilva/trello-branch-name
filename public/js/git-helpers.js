const clipboard = new ClipboardJS('.btn-d-block-1456')
const nameBranch = document.querySelector('#actions-github-1456')
const commitTitle = document.querySelector('#commit-github-1456')
const helperBranche = document.querySelector('#helper-branch-github-1456')
const Promise = window.TrelloPowerUp.Promise

const t = window.TrelloPowerUp.iframe({
  appKey: '9f5a91288ed267b276c4e73d145cd326',
  appName: 'Git Generate Branch Name'
})
/**
 * Get data saved
 *
 * @param {string} [visibility='shared']
 * @return {*} 
 */
function getDataSaved(visibility = 'shared') {
  return t.get('card', visibility)
}
/**
 * Set branch name
 *
 * @param {string} [name='']
 */
function setBranchName(name = '') {
  t.set('card', 'shared', 'branch-name', name)
}
/**
 * Set helper branch
 *
 * @param {string} [branch='']
 */
function setHelperBranche(branch = '') {
  const helper = `git checkout -b ${branch}`
  helperBranche.value = helper
}
/**
 * Set commit title
 *
 * @param {string} [title='']
 * @param {*} branch
 */
function setCommitTitle(title = '', branch) {
  const titleCommit = title.substring(0, 45)
  const formatedCommitTitle = `${titleCommit} [${branch}]`
  t.set('card', 'shared', 'commit-title', formatedCommitTitle)
}
/**
 * Set helpers in inputs
 *
 * @param {*} { shortLink, name }
 */
function setHelpers({ shortLink, name }) {
  getDataSaved().then(data => {
    const formatName = `${data['type-branch'] || 'branch'}/${shortLink}`
    setBranchName(formatName)
    setHelperBranche(formatName)
  })
  setCommitTitle(name, shortLink)
}
/**
 * Add values in inputs
 *
 * @param {*} data
 */
function setValuesInInputs(data) {
  nameBranch.value = data['branch-name']
  commitTitle.value = data['commit-title']
}

setTimeout(() => {
  t.card('all').then(setHelpers)
  getDataSaved().then(setValuesInInputs)
}, 0)

t.render(() => {
  setTimeout(() => {
    t.card('all').then(setHelpers)
    getDataSaved().then(setValuesInInputs)
  }, 0)

  t.sizeTo('#git-helpers').done()
})
