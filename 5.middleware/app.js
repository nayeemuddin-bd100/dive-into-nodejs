/* 
    midleware hosse emon ekti function jar maddome client er request ta ke chnge kora jai . 

    request and response er majkhenee jaiga ta hosse middleware . 
    user request patale eti response korar age chaile amra middleware er madoome check korte pari user authenticat obostaai ache kinnaah ! jodi authentic obostaai thake tahole response dibe or response na diye onno route er patiye dite pari


    3rd party tools : 
    morgan for check request




*/
console.clear()
const express = require("express");
const morgan = require("morgan")


const app = express();

//we can add middlware by app.use()
// app.use(morgan('dev'))
// morgan er maddome ki request asche na aschee ta terminal er maddome logging kora jai orthaa terminal er maddome ta dekaa jai


// eta globally shob routes er jonno kaj korbe orthat er maddome shob page e hit korlei middleware kaj korbe . bt amra jodi chai specipic kono route e middleware hit kori taaw o possible .. evabe korar jonno route er address and req,res e majkhne ei middleware set korte hobe . ekshate onkgula middleware set kora jai , jeta first e declare kora hobe seta firse e execute hobe jeta second e dewa hobe setaa second e execute hobe. evabe kore cholte thakbe. jokon shob gula middlware execute kora execue hoye jabe thn response hobee


//create custom middleware
//jekono middleware parameters akare 3 ta objects pabe => req,res, next . ekhane req,res hosse route er req,res gula r next hosse ekta function middleware er kaj complete korte parle etaar kaj suru hobee

function customMiddleware(req, res, next) {
  // console.log('I am logged in' ,req.url)
  if (req.url === '/about') {
    res.send( ` <h1> Sorry this page is block by admin</h1> ` )
  }
  next()
}

function tinyLogger() {
  return (req, res, next) => {
    console.log(`${req.method} - ${req.url}  `)
    next()
  }
}

const middleware = [customMiddleware , tinyLogger()]
 app.use(middleware)


app.get("/login", morgan('dev') ,(req, res) => {
  res.send(" <h1> Helloo I am Login page </h1> ");
});

app.get("/about", (req, res) => {
//   res.send(" <h1> Helloo I am test File </h1> ");
    res.json({
         message: 'A message from Your router'
    })
});

app.get("/", (req, res) => {
  res.send(" <h1> Helloo world , Express Framework is beautiful , Aww Npm is working </h1> ");
});

app.get("*", (req, res) => {
  res.send(
    " <h1> 404 Error </h1> "
  );
});
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log('listening on port ' + PORT)
})

