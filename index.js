const express = require('express')
const path = require('path')
const expressWs = require('express-ws')
const proxy = require('http-proxy-middleware')
const PORT = process.env.PORT || 5000

const app = express()
expressWs(app)
app.ws('/conn2', require('./routes/conn2'))
app
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
