const express = require('express')
const bodyParser = require('body-parser')
const ctrl = require('./Controller/module_controller')

const app = express()
app.use(bodyParser.json())

app.get('http://quotes.rest/qod', ctrl.create )
app.post('api/dailyquotes/', ctrl.read)
app.put(`/api/dailyquotes/favorites`,  ctrl.update)


const PORT = 4800

app.listen(PORT, () => console.log(`server is listening${PORT}`))
