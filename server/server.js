const express = require('express')
const bodyParser = require('body-parser')
const ctrl = require('./Controller/module_controller')
// const webpack = require('webpack')
const app = express()
app.use(bodyParser.json())

app.get('/api/dailyquotes/', ctrl.create)
app.post('/api/dailyquotes/', ctrl.read)



const PORT = 4800

app.listen(PORT, () => console.log(`server is listening${PORT}`))
