console.clear();
const express = require('express')

const app = express()


app.get("/login", (req, res) => {
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

// root route ke sobar niche dite hoi . karon root route er power slash jodi protomei mile jai tahole onno gulo execute hobe nah





// port tah amra set kore rakhi nah eta set korbe amader environment or machine tai evabee dewaa . amra npm diye chaile port set kore dite pari. ex: set PORT=8080 evabe run kore jodi npm start diy tahole port 8080 eti run hobe.
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log('listening on port ' + PORT)
})



// Http method
/*

post => client er teke jokon kono data newaa hoi tkn setaa hosse post method . ex: form er maddome jokon kono data input niy tkn seta hosse post method . 

Get => kono kisu read korar jonno jeta use kora hoi setaa hosse post method. tht means client er kas teke server er kase kono data jasse nah , bt server kisu data back dissee etaa hosse get method

Put => kono kisu update korar jonno put method use kora hoi . 

patch => eta o put method er moto update korar kaje use kora hoi . 

delete => preveious kono data delete korar jonno delete method use kora hoi .








 */