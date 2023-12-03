const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/user/signup", (req, res) => {
    console.log(req.body);
    const name = req.body.name;
    const age = req.body.age;
    const username = req.body.username;

    // Do a DB call or a check whether the user is already present or not

    // db.find(username) => if this is true, send("already exist") else create a new user in db with name = name, age = age,
    // username = username;

    res.send("OK");
});

app.get("/products", (req, res) => {
  res.send([
    {
      id: 1,
      title: "dummy",
      price: "...",
      category: "...",
      description: "...",
      image: "...",
    },
    {
      id: 30,
      title: "dummy2",
      price: "...",
      category: "...",
      description: "...",
      image: "...",
    },
  ]);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// http://localhost:3000/ -> Whenever someone does a GET request on this endpoint, send him/her "Hello World"

// Browser by default, considers a GET request
