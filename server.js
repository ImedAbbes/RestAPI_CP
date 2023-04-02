const express = require('express')
const app = express()
const port = 8000
const cors = require('cors')
const Connect = require ('./helpers/dbConnect')


app.use(express.json())
app.use(cors())
Connect()
app.use('/api/user',require('./routes/userRoutes'))


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))