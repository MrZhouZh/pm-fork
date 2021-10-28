const { exists } = require('fs-extra')
const fs = require('fs-extra')

// fs.mkdir('/test/packages', err => {
//   if (err) {
//     console.log(
//       'mkdir failed',
//       err
//     )
//   }
// })

fs.copy('packages', 'test/demo', err => {
  if (err) {
    console.log(
      'copy failed',
      err
    )
  }
})

// With async/await:
// async function example () {
//   try {
//     await fs.writeJson(`${__dirname}/test.json`, {
//       name: 'fs-extra',
//       version: '1.0',
//       packages: ['./src']
//     })
//     console.log('success!')
//   } catch (err) {
//     console.error(err)
//   }
// }

// example()

// fs.pathExists(`packages`, (err, exists) => {
//   console.log('pathExists err...', err)
//   console.log('pathExists exists...', exists)
// })

const fileExists = fs.pathExistsSync(`package`)
console.log('pathExistsSync fileExists>>>', fileExists)
