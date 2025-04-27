const express = require("express");

const app = express();
const dotenv = require("dotenv");
const connectDB = require("./database/db");
const userAuth = require("./routes/auth.routes");
const userProfile = require("./routes/profile.route");
const productsRoute = require("./routes/product.routes");
const { authentication } = require("./middleware/authentication");
const cors = require("cors");
// const {ai} = require("./configs/gemini")
var cookieParser = require("cookie-parser");
const { ai } = require("./configs/gemini");

dotenv.config();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "https://fascinating-raindrop-1a88b8.netlify.app",
    credentials: true,
  })
);
//authentication
app.use("/api/auth", userAuth);

//profile
app.use("/api/profile", userProfile);

//products
app.use("/api/products", productsRoute);

app.get("/", authentication, async (req, res) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: "Explain how AI works in a few words",
    });

    res.json({ response });
  } catch (error) {
    console.log(error);
  }
});

const PORT = process.env.PORT || 3000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => console.log(err));
