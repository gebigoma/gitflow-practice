// my code goes here
const
  express = require('express'),
  app = express(),
  PORT = 3000

app.get('/', (req, res) => {
  res.json({ message: "ROOT ROUTE" })
})

app.listen(3000)