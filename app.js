const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.set("view engine", "ejs")

app.listen(3000, () => {
  console.log('Listening on port 3000')
})

app.get('/', (req, res) => {
  const date = new Date();
  const today = date.getDay();
  let day = ""

  switch (today) {
    case 0:
      day = "sunday"
      break;
    case 1:
      day = "monday"
      break;
    case 2:
      day = "tuesday"
      break;
    case 3:
      day = "wednesday"
      break;
    case 4:
      day = "thursday"
      break;
    case 5:
      day = "friday"
      break;
    case 6:
      day = "saturday"
      break;
    default:
      day = "unknown"
  }

  res.render("list", {
    kindOfDay: day
  })

})
