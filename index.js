const express = require("express");
const { connect } = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");

//Settings
dotenv.config(); //dotenv, to use .env file
app.use(express.json()); //body parser middleware
app.use(
  cors({
    origin: "*",
  })
); //allow all cors

//Import routes
const usersRoute = require("./routes/users");
const productsRoute = require("./routes/products");
const authRoute = require("./routes/auth");

//DB connection
connect(`${process.env.MONGO_DB}`)
  .then(() => console.log("DB Connected!!"))
  .catch((error) => console.log(error));

//Server
app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running on http://localhost:" + process.env.PORT);
});

//API endpoint
app.get("/", (req, res) => {
  res.json({
    message: "API is working!",
  });
});
app.use("/products", productsRoute);
app.use("/auth", authRoute);
app.use("/users", usersRoute);
