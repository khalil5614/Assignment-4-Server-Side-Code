const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Assignment 4 server running");
});

app.listen(port, () => {
  console.log("Assignment 4 server running on", port);
});

// const express = require("express");
// const cors = require("cors");
// const app = express();
// const port = process.env.PORT || 8000;
// app.use(cors());
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.listen(port, () => {
//   console.log("Example app listening on port 8000!");
// });
