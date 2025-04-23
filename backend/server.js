const express = require("express");

const app = express();
const dotenv = require("dotenv");
const connectDB = require("./database/db");
const userAuth = require("./routes/auth.routes");
const { authentication } = require("./middleware/authentication");
var cookieParser = require('cookie-parser')

dotenv.config();

app.use(express.json());
app.use(cookieParser())

//authentication
app.use("/api/auth", userAuth);


app.get("/", authentication, (req, res) => {
  res.send("Hello World");
});

const PORT = process.env.PORT || 3000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => console.log(err));
