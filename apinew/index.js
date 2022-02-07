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
const sgMail = require("@sendgrid/mail");

//sendgrid api key
sgMail.setApiKey(
  "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"
);

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

//email page
app.get("/send-email", (req, res) => {
  //Get Variables from query string

  const { recipient, sender, topic, text } = req.query;

  //Sendgrid Requirements

  const msg = {
    to: recipient,
    from: sender,
    subject: topic,
    text: text,
  };

  //Send Email
  sgMail.send(msg).then((msg) => console.log(text));
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running!");
});
