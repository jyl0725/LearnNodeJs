const express = require('express');
const bodyParser = require('body-parser');

let {mongoose} = require('./db/mongoose');
let {Todo} = require('./models/Todo');
let {User} = require('./models/User')

let app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  })
  todo.save().then((doc) => {
    res.send(doc);
  }).catch(err => {
    res.status(400).send(err)
  })
})

app.listen(3000, () => {
  console.log('started on Port 3000')
})
