const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

let app = express();

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/public'))

// how you register a middleware
app.use((req, res, next) => {
  let now = new Date().toString();
  let log = `${now}: ${req.method} ${req.url}`;

  console.log(log)
  fs.appendFile('server.log', log + '\n', (err) => {
    if(err){
      console.log('unable to save log')
    }
  })
// next tells when the middle to finish.
  next();
});

// app.use((req, res, next) => {
//   res.render('maintenance.hbs');
// // no next() will not move forward, it will stay at this middleware where it renders
// })

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear()
})

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
})

app.get('/', (req, res) => {
  res.render('home.hbs',{
    pageTitle: 'Home Page',
    welcomeMessage: 'Welcome Here',
  })
})

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page',
  });
});


app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable to handle request'
  });
});

app.listen(3000);
