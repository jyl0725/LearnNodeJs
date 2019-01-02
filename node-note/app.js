console.log('starting app')

const fs = require('fs');
const os = require('os');
const note = require('./note.js')
const _ = require('lodash')

// let user = os.userInfo();
// fs.appendFileSync('greeting.txt', `Hello ${user.username}! You are ${note.age}.`);
//
// let res = note.add(3, 7);
// console.log(res)

console.log(_.isString(true));
console.log(_.isString('true'));

var filterArray = _.uniq(['Andrew', 'Andrew', '1', '1', '2', '2', '4'])
console.log(filterArray)
