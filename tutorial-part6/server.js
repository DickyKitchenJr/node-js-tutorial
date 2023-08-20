const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3500;

// express handles routes from top to bottom, so you want to start with your root route '/' then build from there

// '^/$|index.html' translates to the request will begin with a slash ('^/'), end with a slash ('/$'), or end in index ('|index') with .html optional ('(.html)?')
// so combined it is '^/$|index(.html)?'
app.get("^/$|index(.html)?", (req, res) => {
  // res.sendFile('./views/index.html', {root: __dirname});
  // does the same as below
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/new-page(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "new-page.html"));
});

app.get("/old-page(.html)?", (req, res) => {
  res.redirect(301, "/new-page.html");
});

// chaining rountes with route handlers
// first way
app.get('/hello(.html)?', (req, res, next) =>{
    console.log('here is the first attempted thing');
    next();
}, (req, res) =>{
    res.send('Here is the second thing');
})

// second way
const one = (req, res, next) =>{
    console.log('one');
    next();
}

const two = (req, res, next) => {
  console.log("two");
  next();
};

const three = (req, res) =>{
    console.log("three");
    res.send('Finished');
}

app.get('/chained(.html)?', [one, two, three]);

// because of the top down way that express runs, it's good to end your routes with a catch-all for when non-existing routes are input by the user
app.get("/*", (req, res) => {
    res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
