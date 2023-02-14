const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const {
    getHouses,
    addHouses,
    updateHouses,
    deleteHouses
} = require('./controller')


app.get('/api/houses', getHouses)
app.post('/api/houses', addHouses)
app.put('/api/houses/:id', updateHouses)
app.delete('/api/houses/:id', deleteHouses)

app.listen(4004, console.log(`App running on port 4000!`))