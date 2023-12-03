const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dishes = require("./routes/dishRoutes");
const userRoutes = require("./routes/userRoutes");
const app = express();

const port = 3005;
app.use(cors());



app.use(express.json());

// mongoose.connect('mongodb+srv://tyadav1408:iXcKGOKVCeYdpfA5@cluster0.h1qx7b4.mongodb.net/?retryWrites=true&w=majority');
mongoose
.connect("mongodb+srv://tyadav1408:iXcKGOKVCeYdpfA5@cluster0.h1qx7b4.mongodb.net/?retryWrites=true&w=majority")
.then(()=> {
  console.log("Connected");
})
.catch((err) => {
  console.log(err);
});

console.log("Connected to MongoDB");

app.use("/api", dishes);
app.use("/api/user", userRoutes);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});