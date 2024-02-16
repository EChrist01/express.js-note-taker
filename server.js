const express = require('express');
const path = require('path');
const fs = require('fs'); // import fs module
const { v4: uuidv4 } = require('uuid'); // import uuidv4 function
const api = require('./routes/apiRoutes.js');

const PORT = process.env.PORT || 3001; 

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);
app.use(express.static('public'));

// GET Route for feedback page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// GET Route for homepage
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.post("/api/notes", (req, res) => {
  let database = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
  console.log(database);
  
  const newObj = {
    id: uuidv4(),
    title: req.body.title,
    text: req.body.text,
  };

  database.push(newObj);
  console.log(newObj);

  fs.writeFileSync("./db/db.json", JSON.stringify(database));
  res.json(database);
});

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);