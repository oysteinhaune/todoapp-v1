const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const date = require(__dirname + "/date.js")
app.set("view engine", "ejs")

const day = date.getDate()

const items = ["Buy Food", "Cook Food", "Eat Food"]
const workItems = []

app.listen(process.env.PORT || 3000, () => {
  console.log('Listening on port 3000')
})

app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(express.static("public"))

app.get('/', (req, res) => {
  res.render("list", {
    itemsArray: items,
    siteTitle: "Home",
    date: day
  })
})

app.get('/work', (req, res) => {
  res.render("list", {itemsArray: workItems, siteTitle: "Work", date: day})
})

app.post('/', (req, res) => {
  if(req.body.button === "Home") {
    let item = req.body.todoitem
    items.push(item)
    res.redirect("/")
  } else {
    let item = req.body.todoitem
    workItems.push(item)
    res.redirect("/work")
  }
})
