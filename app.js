const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const ejs = require('ejs')

app.use("view engine", "ejs")

app.listen(3000, () => {
  console.log('Listening on port 3000')
})

app.get('/', (req, res) => {
  const date = new Date();
  const today = date.getDay();

  if (today === 6 || today === 0) {
    res.send("Yay it's weekend!!! :D :D")
  } else {
    res.send("Boo! It's a working day!")
  }

  res.sendFile(`${__dirname}/public/index.html`)
})
