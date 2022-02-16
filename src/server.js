const express = require("express");
const app = express();
const port = 3032;
require("dotenv").config();
const dbConnect = require("./db/conns");

//DB connection
dbConnect();

// url Encoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Router
const userRouter = require("./routes/user.route.js");

app.use("/api/user", userRouter);

app.listen(port, () => {
  console.log(`App is listing to ${port}`);
});
