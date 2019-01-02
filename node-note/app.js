console.log('starting app')

const fs = require('fs');

fs.appendFileSync('greeting.txt', 'Hello World');
