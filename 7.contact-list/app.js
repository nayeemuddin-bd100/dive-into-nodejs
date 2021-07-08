console.clear()



const express = require('express')
const routes = express.Router()
const morgan = require("morgan");

const contactRoutes = require('./contactRoutes')

const app = express()
app.use(morgan('dev'))
//user create new contact er jonno jekono vabe data patate pare like json akare or form akaare . urlencoded e extended true er maddome bole dewaa hosse ekhane jekono data rcv kortee parbe !! 
app.use(express.urlencoded({extended:true}))
//amader accept korte hobe json data tai 
app.use(express.json())


app.use("/contacts", contactRoutes);

app.get("*", (req, res) => {
  res.send(" <h2>Plese use correct routes</h2>");
});

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log('listening on port ' + PORT)
})