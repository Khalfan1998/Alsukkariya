const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const cors = require("cors");
const path = require("path");
// const sgMail = require("@sendgrid/mail");

// //sendgrid api key
// sgMail.setApiKey(process.env.SG_KEY);

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/carts", cartRoute);
app.use("/api/checkout", stripeRoute);

app.use(express.static(path.join(__dirname, "/clientnew/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/clientnew/build", "index.html"));
});

// //email page
// app.get("/send-email", (req, res) => {
//   //Get Variables from query string

//   const { recipient, sender, topic, text } = req.query;

//   //Sendgrid Requirements

//   const msg = {
//     to: recipient,
//     from: sender,
//     subject: topic,
//     text: text,
//   };

//   //Send Email
//   sgMail.send(msg).then((msg) => console.log(text));
// });

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running!");
});
