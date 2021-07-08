
console.clear();
const express = require("express");
const morgan = require("morgan");
const userRouter = require("./userRoute.js")
const postRouter = require("./postRoute")

const app = express();

app.use(morgan('dev'));




app.use('/user', userRouter)
app.use('/posts', postRouter)

// dynamic route
/*

app.get('/products/:prodId', (req, res) => {
  const urlParams = req.params
  console.log(urlParams);
  res.send(`I am listening ${urlParams.prodId}`);
} )

app.get("/login", (req, res) => {
  res.send(" <h1> Helloo I am Login page </h1> ");
});
*/
app.get("/", (req, res) => {
  res.send(
    " <h1> Helloo world , Express Framework is beautiful , Aww Npm is working </h1> "
  );
});

app.get("*", (req, res) => {
  res.send(" <h1> 404 Error </h1> ");
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
