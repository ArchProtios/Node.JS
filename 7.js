// fs - sync
const fs = require('fs')

const a = fs.readFileSync('./components/a.txt','utf-8')
const b = fs.readFileSync('./components/b.txt','utf-8')

fs.writeFileSync('./components/result.txt',`here the result is ${a} & ${b}`)

