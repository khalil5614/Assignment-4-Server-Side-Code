const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get("/api/courses", (req, res) => {
  const list = require("./data/courseDetails.json");
  res.send(list);
});
app.get("/api/courses/:id", (req, res) => {
  const courseList = require("./data/courseDetails.json");
  const params = req.params;
  const { id } = params;
  //const course = courseList.find((course) => parseInt(course.course_id) == id);
  const course = courseList.find(function (element) {
    const course_id = parseInt(element.course_id);
    return course_id == id;
  });

  res.send(course);
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
