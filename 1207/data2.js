const str1 = require('fs')
  .readFileSync('/dev/stdin', 'utf8')
  .split('\n')
const str = str1[0]

console.log(str)
