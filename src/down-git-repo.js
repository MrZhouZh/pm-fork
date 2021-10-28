const downloadGitRepo = require('download-git-repo')

downloadGitRepo('https://github.com/node-fetch/node-fetch.git', 'test/tmp', { clone: true }, function (err) { console.log(err ? 'Error' : 'Success') })

