const str2 = require('fs')
  .readFileSync('/dev/stdin', 'utf8')
  .split('\n')
const str = str2[0]
console.log(str)

const str1 = str2[1]
console.log(str1)

const str3 = str2[2]
console.log(str3)
