const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passportConfig = require("./lib/passportConfig");
const cors = require("cors");
const fs = require("fs");
const morgan = require("morgan");

// MongoDB
mongoose
  // .connect("mongodb://127.0.0.1:27017/jobPortal", {
  .connect("mongodb+srv://vietanh261:26012003@jobportal.ufitfdo.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((res) => console.log("Connected to DB"))
  .catch((err) => console.log(err));

// initialising directories // no need anymore because of saving files on cloudinary
// if (!fs.existsSync("./public")) {
//   fs.mkdirSync("./public");
// }
// if (!fs.existsSync("./public/resume")) {
//   fs.mkdirSync("./public/resume");
// }
// if (!fs.existsSync("./public/profile")) {
//   fs.mkdirSync("./public/profile");
// }

const app = express();
const port = 5000;

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(morgan('dev'));

// Setting up middlewares
// app.use(cors(
//   {
//     origin: ["*"],
//     methods: ["POST", "GET", "PUT"],
//     credentials: true,
//   }
// ));
app.use(cors());
app.use(express.json());
app.use(passportConfig.initialize());

// Routing
app.use("/auth", require("./routes/authRoutes"));
app.use("/api", require("./routes/apiRoutes"));
app.use("/upload", require("./routes/uploadRoutes"));
app.use("/host", require("./routes/downloadRoutes"));

app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  const statusCode = error.status = 500;
  return res.status(statusCode).json({
      status: 'error',
      code: statusCode,
      stack: error.stack,
      message: error.message = 'Internal Server Error'
  })
});

app.get("/", (req, res) => {
  res.send("API is running...");
})

app.listen(port, () => {
  console.log(`Server started on port ${port}!`);
});
