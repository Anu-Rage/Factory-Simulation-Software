const connectToMongo = require('./db');
const express = require('express')
if(connectToMongo())
console.log("Connected successfully");

const app = express()
const port = 8000
const cors = require('cors');
app.use(cors())
app.use(express.json());
// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/info', require('./routes/info'))


app.get('/', (req, res) =>
{
    res.send('Hello world!')
})

app.listen(port, ()=> {
    console.log(`Example app listening at http://localhost:${port}`)
})
