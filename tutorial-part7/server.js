const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const errorHandler = require('./middleware/errorHandler');
const { logger } = require("./middleware/logEvents");
const PORT = process.env.PORT || 3500;

// **REMINDER** express runs from the top down, so whatever is coded first runs first

// custom middleware logger
app.use(logger);

// 3rd party middleware; cors = Cross Origin Resource Sharing

// whitelist is a list of domains that are allowed to access the backend,
//  the last two are for development (running locally) and would be removed after development (along with !origin in the if statement)
const whitelist = [
  "https://dickykitchen.com",
  "https://www.dickykitchen.com",
  "http://127.0.0.1:5500",
  "http://localhost:3500",
];
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

// built-in middleware to handle urlencoded data
// in other words, form data
// 'content-type: application/x-www-form-urlencoded'
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json
app.use(express.json());

// built-in middleware to serve static files
app.use(express.static(path.join(__dirname, "/public")));

app.get("^/$|/index(.html)?", (req, res) => {
  //res.sendFile('./views/index.html', { root: __dirname });
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/new-page(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "new-page.html"));
});

app.get("/old-page(.html)?", (req, res) => {
  res.redirect(301, "/new-page.html"); //302 by default
});

// Route handlers
app.get(
  "/hello(.html)?",
  (req, res, next) => {
    console.log("attempted to load hello.html");
    next();
  },
  (req, res) => {
    res.send("Hello World!");
  }
);

// chaining route handlers
const one = (req, res, next) => {
  console.log("one");
  next();
};

const two = (req, res, next) => {
  console.log("two");
  next();
};

const three = (req, res) => {
  console.log("three");
  res.send("Finished!");
};

app.get("/chain(.html)?", [one, two, three]);

app.all("*", (req, res) => {
  res.status(404)
  if(req.accepts('html')){
    res.sendFile(path.join(__dirname, "views", "404.html"));
  } else if(req.accepts('json')){
    res.json({error: "404 Not Found"});
  } else {
    res.type('txt').send("404 Not Found");
  }
});

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
