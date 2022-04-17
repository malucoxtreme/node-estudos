const _ = require('lodash')

const a = [1, 7, 3, 10, 5]
const b = [2, 7, 3, 9, 10]

const c = _.difference(a, b)
console.log(c)