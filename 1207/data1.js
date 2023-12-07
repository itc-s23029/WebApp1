const lines = require('fs')
  .readFileSync('/dev/stdin', 'utf8')
  .split('\n')
const str = lines[0]

console.log(str)
