const express = require('express')
const morgan = require("morgan")

const app = express()

//ejs ke kotaw import korte hoi nah. express js amader ekta view engin provide kore amra chaile eta ke template engine bolte pari bt express etake boltese view engin

//er mane hosse view engin take amra chnge korte chassi .r kon value dara chnge korte chassi ta bole dewaa hosse ejs er maddome. mane ejs take default value engin hisebe set korsi.. 
// app.set('view engine', 'ejs')

// express prottek ta views ke views namer ekta folder er modde rake . default eta ke chaile amra evaee kore chnge korte pari . 
//app.set('views', 'template/views') // ekhane first parameter e views ke chnge kortesi eta bole dewa hosse and 2nd parameter e kotai chnge kortesi ta bole dewa hosse! ete kore default views rakhar jaiga hobe template/views . amraa ekhane default taai raktesi
app.set('view engine', 'ejs')

//ekhane exact name views hote  hobe . notoo path kuje pawaa jabe na


// amraa chassi ekane localhost e gele index.ejs file tah show korbe. er jonno app.get er modde res.send er bodole amader use korte hobe res.render karon express er modde ekta views engin ase eta express render korte pare . r render er modde index bole dileei hoi karon amra default view engine use koresi tai default path hosse views folder tah . ekhan teke just index er nam ta bolee dilei hoi ... 




app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.get("/help", (req, res) => {
  res.render("pages/help" , {title: "help Page"});
});

app.get('/about', (req, res) => {
    res.render("pages/about", { title: "about Page" });
})

app.get('/', (req, res) => {
    // res.send('Working on template engin')

    let post = {
        title: 'Test Title',
        body: 'Test Body',
        published: true,
    }

    let posts = [
        {title: ' Title One', author: 'Nayeem'},
        {title: ' Title Two', author: 'Nayeem'},
        {title: ' Title Three', author: 'Nayeem'},
        {title: ' Title Four', author: 'Nayeem'},
    ]
    res.render('pages/index',{title: 'Ejs testing with dynamc data' ,post: post,posts}) // title parameter niye index.ejs file e comment kora ase
})


const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log('listening on port ' + PORT)
})