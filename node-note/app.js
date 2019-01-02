console.log('starting app')

const fs = require('fs');
const os = require('os');
const note = require('./note.js')

// let user = os.userInfo();
// fs.appendFileSync('greeting.txt', `Hello ${user.username}! You are ${note.age}.`);

let res = note.add(3, 7);
console.log(res)
