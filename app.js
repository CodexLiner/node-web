const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

// New app using express module
const app = express();
app.use(express.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.post("/", function (req, res) {
  axios
    .post(
      "https://304a-2405-201-3008-611c-94f2-1083-4c2c-99da.in.ngrok.io/paytm_webhook",
      {
        response: req.body,
      }
    )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  res.send({ status: req.body });
});

app.listen(3000, function () {
  console.log("server is running on port 3000");
});
