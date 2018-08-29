const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const ctrl = require('./module_controller')


app.use(bodyParser.json())

app.get('/api/dailyquotes/', ctrl.create)
app.post('/api/dailyquotes/', ctrl.read)



const PORT = 4800

app.listen(() => console.log(`server is listening${PORT}`))
