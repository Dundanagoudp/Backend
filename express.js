const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World');
})

// midlware

app.use(function(req, res, next){
  console.log('middleware ');
  next();
});


app.get('/users', function (req, res) {
  res.send('Hello users 251');
})

// app.get('/users', function (req, res,next) {
// return next(new Error("something went wrong look"));
// })

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(3000)
