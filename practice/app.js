console.clear()
const express = require('express')
const morgan = require("morgan")

const contactRoutes = require('./ContactRoutes')


const app = express()
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.use('/contacts', contactRoutes)

app.get('*', (req, res) => {
    res.send(' <h2> Please Input a valid url </h2> ')
})


const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log('listening on port ' + PORT)
})