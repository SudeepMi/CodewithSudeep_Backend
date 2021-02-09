const express = require("express");
const app = express();

const port = process.env.PORT || 8080;
// const host = process.env.HOSTNAME || "codewithsudeep";
const host = process.env.HOSTNAME || "0.0.0.0";


const server = app.listen(port, host, () => {
  console.log('Port %d',port);
  console.log(`Node.js API server is listening on http://${host}`);
});



app.get("/", (req, res) => {
  res.status(200).send("WHATABYTE: Food For Devs");
});


//serve static asset 







