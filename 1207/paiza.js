const print = console.log
const stream = require('fs')
  .readFileSync('/dev/stdin', 'utf8')
  .trim()
const lines = stream.split('\n')
const [a, b] = lines
print(a, b)
print('stream', stream)
print('lines', lines)
