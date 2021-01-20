  const express = require('express')
const RouteBuilder = require('./routes');
const cors = require('cors')


const app = express()
app.use(cors())
RouteBuilder.build(app);


app.use(express.json())

app.set('port', 4040)
console.log('Server listening on port', app.get('port'))
app.listen(app.get('port'))