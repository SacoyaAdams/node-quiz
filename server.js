//const { body, check, param, validationResult } = require("express-validator");
const cors = require("cors");

const {  promisePool } = require("./dbConnection.js");

const express = require("express");
const path = require("path"); 
const PORT = 80;
const corsOptions = {
  origin: ["http://localhost:3000"],
  optionsSuccessStatus: 200,
};

const app = express();
// parses JSON from incoming request
app.use(express.json());

// Do not edit
const options = {
  lemon: "yellow",
  lime: "limegreen",
  tangerine: "orange",
  grapefruit: "lightcoral",
};


// trying to test my port 
app.get("message", cors(corsOptions), async (req, res) =>{
  res.send({ message: "Test is sucessful, yay!!!"});
});

// #3 helper function 'getColor`
const getColor = (fruit) => {};

// #1 serve the colors.html page when /colors is visited
// DO NOT USE express.static
app.get("/colors", cors(corsOptions), async (req, res) => {
  const colorType = req.params["color"];
  const [rows] = await promisePool.query("Select * from car Where car_color = ?", [colorType]);
  res.send(rows);
});

// #2 & #4 handle POST requests to /colors
app.post("/colors", (cors(corsOptions), async (req, res) => {

})

);

// #6 serve styles.css - DO NOT use express.static()
app.get("/styles.css", () => {});

// #5 Update functionality to database
app.put("/colors/:id/:fruit", cors(corsOptions), async (req, res) => {
  
);

// #7 unknown routes - 404 handler
// research what route to serve this for
app.get("", () => {});

// Global error handling middleware
// You can leave this alone
app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 400,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});
