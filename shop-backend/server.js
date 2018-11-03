const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors())
app.use(bodyParser.json())

let shoppingCart = []

console.log(shoppingCart)

app.get('/cart', (req, res) => {
  res.json({ shoppingCart })
})

app.post('/cart', (req, res) => {
  shoppingCart = req.body.shoppingCart
  res.json({ shoppingCart })
})

app.listen(8080, function () {
  console.log('Server Started on http://localhost:8080')
  console.log('Press CTRL + C to stop server')
})