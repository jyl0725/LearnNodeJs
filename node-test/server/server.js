const express = require('express')

let app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found.',
    name: 'To do 1.0'
  })
})

app.get('/users', (req, res) => {
  res.status(200).send([
    {
      name: 'Jin',
      age: 27
    },
    {
      name: 'Angel',
      age: 27
    },
    {
      name: 'Eric',
      age: 32
    }])
})


app.listen(3000)
module.exports.app = app;
