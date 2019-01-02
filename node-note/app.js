console.log('starting app')

const fs = require('fs');
const os = require('os');

let user = os.userInfo();


console.log(user);
fs.appendFileSync('greeting.txt', `Hello ${user.username}!`);
